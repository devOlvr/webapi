import { Router } from 'express';
import { createUsers, listUsers, listUsersId, updateUser, deleteUser } from '@/controllers/usuariosController';
import checkRole from '@/middlewares/checkRole';
import EnumUsuario from '@/enum/enumUsuario';

const route = Router();

route.get('/', checkRole([EnumUsuario.COMUM]), listUsers);
route.get('/:id', checkRole([EnumUsuario.COMUM]), listUsersId);
route.post('/', checkRole([EnumUsuario.COMUM]), createUsers);
route.put('/:id', checkRole([EnumUsuario.COMUM]), updateUser);
route.delete('/:id', checkRole([EnumUsuario.COMUM]), deleteUser);

export default route;
