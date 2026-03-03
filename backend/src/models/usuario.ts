import EnumUsuario from "@/enum/enumUsuario";

class User {
    id: number;
    nome: string;
    email: string;
    senha: string;
    role: EnumUsuario;

    constructor(id: number, nome: string, email: string, senha: string, role: EnumUsuario) {
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.role = role;
    }
}

export default User;