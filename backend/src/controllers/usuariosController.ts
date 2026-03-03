import express from 'express';
import { createUser, listAllUsers, updateUserById, deleteUserById, listUserById } from '@/services/usuariosService';
import ValidationError from '@/errors/ValidationError';
import NotFoundError from '@/errors/NotFoundError';

function validateAllowedFields(body: any, allowed: string[]) {
    const keys = Object.keys(body || {})
    const invalid = keys.filter(k => !allowed.includes(k))
    if (invalid.length > 0) {
        throw new ValidationError(`Campos inválidos: ${invalid.join(', ')}`)
    }
}

export async function createUsers(req: express.Request, res: express.Response, next: express.NextFunction){
    try {
        validateAllowedFields(req.body, ['nome', 'email', 'senha'])
        const { nome, email, senha } = req.body;
        if(!nome || !email || !senha){
            throw new ValidationError("Campos obrigatórios: nome, email, senha")
        }
        const user = await createUser(nome, email, senha);
        res.status(201).json({ message: "Usuário criado com sucesso!", user })
    } catch (error) {
        next(error)
    }
}

export async function listUsers(req: express.Request, res: express.Response, next: express.NextFunction){
    try {
        const usersList = await listAllUsers();
        res.status(200).json({ message: "Lista de usuários:", usersList })
    } catch (error) {
        next(error)
    }
}

export async function listUsersId(req: express.Request, res: express.Response, next: express.NextFunction){
    try {
        const id = Number(req.params.id)
        const user = await listUserById(id);
        if(!user){
            throw new NotFoundError("Usuário não encontrado!")
        }
        res.status(200).json({ message: "Lista de usuários:", user })
    } catch (error) {
        next(error)
    }
}

export async function updateUser(req: express.Request, res: express.Response, next: express.NextFunction){
    try {
        validateAllowedFields(req.body, ['nome', 'email', 'senha'])
        const id = Number(req.params.id)
        const user = await updateUserById(id, req.body)
        if(!user){
            throw new NotFoundError("Usuário não encontrado!")
        }
        return res.status(200).json({ message: "Usuário atualizado com sucesso!", user })
    } catch (error) {
        next(error)
    }
}

export async function deleteUser(req: express.Request, res: express.Response, next: express.NextFunction){
    try {
        const id = Number(req.params.id)
        const deleted = await deleteUserById(id)
        if(!deleted){
            throw new NotFoundError("Usuário não encontrado!")
        }
        return res.status(200).json({ message: "Usuário deletado com sucesso!" })
    } catch (error) {
        next(error)
    }
}
