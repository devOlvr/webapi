# WebAPI

**Resumo**
- API REST em Node.js + Express com MySQL (mysql2) e TypeScript.
- Arquitetura em camadas: routes → controllers → services → database, com middleware global de erros e classes OOP de erro.
- Inicialização automática do schema/tabela ao subir o servidor.

**Arquitetura**
- Server: [server.ts](file:///c:/Users/gabriel.teixeira/Downloads/projeto-estudos/webapi/server.ts)
- Rotas: [usuariosRoutes.ts](file:///c:/Users/gabriel.teixeira/Downloads/projeto-estudos/webapi/src/routes/usuariosRoutes.ts)
- Controllers: [usuariosController.ts](file:///c:/Users/gabriel.teixeira/Downloads/projeto-estudos/webapi/src/controllers/usuariosController.ts)
- Services: [usuariosService.ts](file:///c:/Users/gabriel.teixeira/Downloads/projeto-estudos/webapi/src/services/usuariosService.ts)
- Banco de Dados: [database.ts](file:///c:/Users/gabriel.teixeira/Downloads/projeto-estudos/webapi/src/config/database.ts)
- Middleware de erros: [errorHandler.ts](file:///c:/Users/gabriel.teixeira/Downloads/projeto-estudos/webapi/src/middlewares/errorHandler.ts)
- Middleware de RBAC: [checkRole.ts](file:///c:/Users/gabriel.teixeira/Downloads/projeto-estudos/webapi/src/middlewares/checkRole.ts)
- Erros (POO): 
  - [HttpError](file:///c:/Users/gabriel.teixeira/Downloads/projeto-estudos/webapi/src/errors/HttpError.ts)
  - [ValidationError](file:///c:/Users/gabriel.teixeira/Downloads/projeto-estudos/webapi/src/errors/ValidationError.ts)
  - [NotFoundError](file:///c:/Users/gabriel.teixeira/Downloads/projeto-estudos/webapi/src/errors/NotFoundError.ts)
  - [ConflictError](file:///c:/Users/gabriel.teixeira/Downloads/projeto-estudos/webapi/src/errors/ConflictError.ts)
  - [InternalServerError](file:///c:/Users/gabriel.teixeira/Downloads/projeto-estudos/webapi/src/errors/InternalServerError.ts)
- Model exemplo: [user.ts](file:///c:/Users/gabriel.teixeira/Downloads/projeto-estudos/webapi/src/models/user.ts)
 - Enum de usuários: [enumUsuario.ts](file:///c:/Users/gabriel.teixeira/Downloads/projeto-estudos/webapi/src/enum/enumUsuario.ts)

**Dependências**
- express, mysql2, dotenv
- dev: typescript, ts-node-dev, tsconfig-paths, @types/express, @types/node

**Configuração**
- Crie o arquivo `.env` na raiz:
  - DB_HOST=localhost
  - DB_DATABASE=webapi
  - DB_USER=seu_usuario
  - DB_PASSWORD=sua_senha
  - DB_PORT=3306

**Scripts**
- Iniciar em dev (com aliases): `npm run dev`
- Typecheck: `npx tsc --noEmit`

**Banco**
- Inicialização: [initDatabase](file:///c:/Users/gabriel.teixeira/Downloads/projeto-estudos/webapi/src/config/database.ts#L23-L46)
- Pool de conexões (promises) e helper `query(sql, params)`:
  - [database.ts](file:///c:/Users/gabriel.teixeira/Downloads/projeto-estudos/webapi/src/config/database.ts#L17-L22)
- Estrutura da tabela `users`:
  - id INT AUTO_INCREMENT PRIMARY KEY
  - nome VARCHAR(65) NOT NULL
  - email VARCHAR(65) NOT NULL UNIQUE
  - senha VARCHAR(65) NOT NULL
  - tipoUsuario ENUM('administrator','comum') NOT NULL DEFAULT 'comum'
  - (se usar o script SQL) created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP

**Endpoints Usuários (protegidos por RBAC)**
- POST /users
  - body: { "nome": "Fulano", "email": "fulano@exemplo.com", "senha": "123456" }
  - valida campos obrigatórios e rejeita chaves desconhecidas
  - erros:
    - 400 VALIDATION_ERROR
    - 409 DUPLICATE_EMAIL
    - 500 INTERNAL_ERROR
- GET /users
  - lista id, nome, email
- GET /users/:id
  - 404 NOT_FOUND se não existir
- PUT /users/:id
  - body parcial: { "nome": "...", "email": "...", "senha": "..." }
  - valida chaves desconhecidas e trata duplicidade de email
  - erros: 404 NOT_FOUND, 409 DUPLICATE_EMAIL
- DELETE /users/:id
  - 404 NOT_FOUND se não existir
 - Todas as rotas acima estão protegidas por checkRole exigindo papel ADMINISTRATOR.

**Tratamento de Erros**
- Use classes OOP de erro e delegue ao middleware:
  - Lance ValidationError para dados inválidos.
  - Lance NotFoundError quando recurso não existir.
  - Lance ConflictError para violação de unicidade (email).
  - Erros não mapeados viram 500.
- O middleware está registrado no `server.ts` após as rotas.

**Controle de Acesso (RBAC)**
- Middleware: [checkRole.ts](file:///c:/Users/gabriel.teixeira/Downloads/projeto-estudos/webapi/src/middlewares/checkRole.ts)
- Enum: [enumUsuario.ts](file:///c:/Users/gabriel.teixeira/Downloads/projeto-estudos/webapi/src/enum/enumUsuario.ts)
- As rotas de usuários usam `checkRole([EnumUsuario.ADMINISTRATOR])`.
- É necessário popular `req.user` antes das rotas (ex.: via middleware de autenticação).
- Exemplo simples para testes:

```ts
// server.ts (exemplo de mock para Postman)
import EnumUsuario from './src/enum/enumUsuario'
app.use((req, _res, next) => {
  req.user = { role: EnumUsuario.ADMINISTRATOR }
  next()
})
```

**Padrão de Controllers**
- Controllers não acessam banco; apenas validam input, chamam services e usam `next(err)` para propagação de erros.
- Exemplo (criação, com validação de chaves):

```ts
// src/controllers/usuariosController.ts
import ValidationError from '../errors/ValidationError'

function validateAllowedFields(body: any, allowed: string[]) {
  const invalid = Object.keys(body || {}).filter(k => !allowed.includes(k))
  if (invalid.length > 0) throw new ValidationError(`Campos inválidos: ${invalid.join(', ')}`)
}
```

**Padrão de Services**
- Services encapsulam SQL com placeholders e tratam regras de negócio.
- Exemplo de consulta parametrizada:

```ts
// src/config/database.ts
export async function query<T = any>(sql: string, params?: any[]) {
  const [rows] = await db.query(sql, params)
  return rows as T[]
}
```

**Como adicionar uma rota nova**
- Crie o service com a operação de banco.
- Crie o controller que recebe a requisição, valida dados e chama o service.
- Registre a rota em `src/routes/...`.
- Se precisar proteger com RBAC, aplique `checkRole([EnumUsuario.ADMINISTRATOR])` (ou outros papéis).
- Exemplo (rota de produtos):
  - Service: `src/services/produtosService.ts`
  - Controller: `src/controllers/produtosController.ts`
  - Rota: `src/routes/produtosRoutes.ts` com `route.get('/', listarProdutos)` etc.
  - No `server.ts`: `app.use('/produtos', produtosRoutes)`

**Como criar um model novo**
- Crie a tabela via `initDatabase` ou script SQL ([webapi.sql](file:///c:/Users/gabriel.teixeira/Downloads/projeto-estudos/webapi/src/config/webapi.sql)).
- Crie o model em `src/models/<nome>.ts`. Exemplo:

```ts
// src/models/produto.ts
class Produto {
  id: number
  nome: string
  preco: number
  constructor(id: number, nome: string, preco: number) {
    this.id = id
    this.nome = nome
    this.preco = preco
  }
}
export default Produto
```

- Para tipagem de rows, use tipos dedicados nos services (ex.: `type ProdutoRow = { id:number; nome:string; preco:number }`).

**Boas práticas**
- Use placeholders (?) e arrays de parâmetros para evitar SQL injection.
- Valide chaves desconhecidas e campos obrigatórios nos controllers.
- Padronize respostas e erros via middleware.
- Use aliases do TypeScript com `@/*` (ex.: `@/controllers/...`, `@/services/...`, `@/errors/...`, `@/config/database`).
- Não exponha segredos no código; use `.env`.

**Como rodar**
- `npm install`
- Configure `.env`
- `npm run dev`
- Teste via Postman nas rotas listadas acima.
