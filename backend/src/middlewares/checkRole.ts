import express from 'express'
import EnumUsuario from '@/enum/enumUsuario';

export default function checkRole(roles: EnumUsuario[]){
    return(req: express.Request, res: express.Response, next: express.NextFunction) => {
        const user = req.user;

        if(!user || !roles.includes(user.role)){
            return res.status(403).json({ message: "Acesso negado." })
        }
    }
}