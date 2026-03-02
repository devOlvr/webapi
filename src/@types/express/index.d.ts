import EnumUsuario from "../../enum/enumUsuario";

declare global {
    namespace Express {
        interface Request {
            user?: {
                id: string;
                role: EnumUsuario;
            }
        }
    }
}