# WebAPI + Frontend

**Resumo**
- Backend: Node.js + Express + MySQL (mysql2) + TypeScript com autenticação JWT (cookies HttpOnly), RBAC e rate-limit.
- Frontend: React + Vite com layout compartilhado (Navbar/Footer), proteção de rota (RequireAuth) e integração de Login/Cadastro.
- Inicialização automática do schema e colunas audit/refresh_token ao subir o servidor.

**Arquitetura (Backend)**
- Server: [backend/server.ts](backend/server.ts)
- Rotas: 
  - [backend/src/routes/authRoutes.ts](backend/src/routes/authRoutes.ts)
  - [backend/src/routes/usuariosRoutes.ts](backend/src/routes/usuariosRoutes.ts)
- Controllers:
  - [backend/src/controllers/authController.ts](backend/src/controllers/authController.ts)
  - [backend/src/controllers/usuariosController.ts](backend/src/controllers/usuariosController.ts)
- Services:
  - [backend/src/services/authService.ts](backend/src/services/authService.ts)
  - [backend/src/services/usuariosService.ts](backend/src/services/usuariosService.ts)
- Banco de Dados: [backend/src/config/database.ts](backend/src/config/database.ts)
- Middlewares:
  - [backend/src/middlewares/errorHandler.ts](backend/src/middlewares/errorHandler.ts)
  - [backend/src/middlewares/requireAuth.ts](backend/src/middlewares/requireAuth.ts)
  - [backend/src/middlewares/checkRole.ts](backend/src/middlewares/checkRole.ts)
- Enum: [backend/src/enum/enumUsuario.ts](backend/src/enum/enumUsuario.ts)
- Tipos Express: [backend/src/@types/express/index.d.ts](backend/src/@types/express/index.d.ts)

**Arquitetura (Frontend)**
- Router e layout: [frontend/src/main.tsx](frontend/src/main.tsx), [frontend/src/layouts/PublicLayout.tsx](frontend/src/layouts/PublicLayout.tsx)
- Proteção de rota: [frontend/src/components/RequireAuth.tsx](frontend/src/components/RequireAuth.tsx)
- Navbar/Footer: [frontend/src/components/Navbar.tsx](frontend/src/components/Navbar.tsx), [frontend/src/components/Footer.tsx](frontend/src/components/Footer.tsx)
- Páginas: [frontend/src/pages/Home.tsx](frontend/src/pages/Home.tsx), [frontend/src/pages/Login.tsx](frontend/src/pages/Login.tsx), [frontend/src/pages/Register.tsx](frontend/src/pages/Register.tsx), [frontend/src/pages/Dashboard.tsx](frontend/src/pages/Dashboard.tsx)
- Cliente HTTP: [frontend/src/lib/api.ts](frontend/src/lib/api.ts)
- Vite config: [frontend/vite.config.mjs](frontend/vite.config.mjs)

**Dependências Principais**
- Backend: express, mysql2, dotenv, bcryptjs, jsonwebtoken, cookie-parser, cors, express-rate-limit
- Dev backend: typescript, ts-node-dev, tsconfig-paths, tipos de libs necessárias
- Frontend: react, react-dom, react-router-dom, @vitejs/plugin-react, vite

**Configuração (.env)**
- Crie o arquivo `.env` na raiz:
  - DB_HOST=localhost
  - DB_DATABASE=webapi
  - DB_USER=seu_usuario
  - DB_PASSWORD=sua_senha
  - DB_PORT=3306
  - JWT_SECRET=uma_chave_segura
  - NODE_ENV=development
  - ACCESS_TOKEN_TTL=900
  - REFRESH_TOKEN_TTL=604800
  - CORS_ORIGIN=http://localhost:5173

**Scripts**
- Backend:
  - `npm run backend:dev` → inicia API com ts-node-dev
  - `npm run backend:typecheck` → typecheck do backend
- Frontend:
  - `npm run client:dev` → Vite dev server
  - `npm run client:build` → build de produção
  - `npm run client:preview` → preview de build
  - `npm run client:typecheck` → typecheck do frontend

**Banco de Dados**
- Inicialização automática: [backend/src/config/database.ts](backend/src/config/database.ts)
- Helper de consulta: [backend/src/config/database.ts](backend/src/config/database.ts)
- Estrutura `users`:
  - id INT AUTO_INCREMENT PRIMARY KEY
  - nome VARCHAR(65) NOT NULL
  - email VARCHAR(65) NOT NULL UNIQUE
  - senha VARCHAR(65) NOT NULL
  - tipoUsuario ENUM('administrator','comum') NOT NULL DEFAULT 'comum'
  - refresh_token VARCHAR(255)
  - created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  - updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP

**Autenticação (JWT em cookies HttpOnly)**
- Endpoints:
  - POST /auth/register → cria usuário (senha hash com bcrypt)
  - POST /auth/login → emite access_token (curto) e refresh_token (longo) em cookies HttpOnly
  - GET /auth/me → retorna usuário autenticado (protegido)
  - POST /auth/refresh → renova access token usando refresh token válido
  - POST /auth/logout → invalida sessão (limpa cookies; protegido)
- Segurança:
  - Cookies com SameSite=Lax e Secure em produção
  - Rate limit de login (5/min)
  - Refresh token persistido no banco e validado por comparação

**Proteção e Acesso**
- Backend:
  - `requireAuth` protege /users e demais rotas privadas
  - RBAC via `enumUsuario` e `checkRole` quando necessário
- Frontend:
  - `RequireAuth` protege /dashboard, tenta `/auth/me` e, se expirar, chama `/auth/refresh`
  - Layout público com Navbar/Footer para Home/Login/Register

**Como Rodar**
- Instalar dependências: `npm install`
- Ajustar `.env` com credenciais de banco e JWT_SECRET
- Backend: `npm run backend:dev` (http://localhost:3000/)
- Frontend: `npm run client:dev` (http://localhost:5173/ ou porta alternada)
- Fluxo:
  - Registrar em `/register` e autenticar automaticamente
  - Acessar `/dashboard` (protegido)
  - Login em `/login` redireciona para `/dashboard`

**Boas Práticas**
- Placeholders SQL com parâmetros (evita injection)
- Validação de campos nos controllers e erros padronizados via middleware
- Segredos somente via `.env`
- Aliases TypeScript: `@/...` para imports consistentes

**Troubleshooting**
- Erro de coluna ausente (ex.: tipoUsuario): a inicialização aplica `ALTER TABLE` tolerantes; reinicie o backend
- Portas em uso no Vite: o server escolhe outra porta e o CORS em dev aceita origin dinâmico
