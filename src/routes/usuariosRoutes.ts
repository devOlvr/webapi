import { Router } from 'express';
import { createUsers, listUsers, listUsersId, updateUser, deleteUser } from '../controllers/usuariosController';

const route = Router();

route.get('/', listUsers);
route.get('/:id', listUsersId);
route.post('/', createUsers);
route.put('/:id', updateUser);
route.delete('/:id', deleteUser);

export default route;
