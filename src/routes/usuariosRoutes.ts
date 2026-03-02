import { Router } from 'express';
import { createUsers, listUsers, listUsersId, updateUser, deleteUser } from '@/controllers/usuariosController';
import checkRole from '@/middlewares/checkRole';
import EnumUsuario from '../enum/enumUsuario';

const route = Router();

route.get('/', checkRole([EnumUsuario.ADMINISTRATOR]), listUsers);
route.get('/:id', checkRole([EnumUsuario.ADMINISTRATOR]), listUsersId);
route.post('/', checkRole([EnumUsuario.ADMINISTRATOR]), createUsers);
route.put('/:id', checkRole([EnumUsuario.ADMINISTRATOR]), updateUser);
route.delete('/:id', checkRole([EnumUsuario.ADMINISTRATOR]), deleteUser);

export default route;
