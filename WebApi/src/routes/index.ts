import { Router } from 'express';
import enderRoutes from './endereco.routes';
import usersRoutes from './users.routes';
import sessionRoutes from './session.routes';
import prodRoutes from './produto.routes';

const routes = Router();

routes.use('/users', usersRoutes);
routes.use('/prod', prodRoutes);
routes.use('/ender', enderRoutes);
routes.use('/session', sessionRoutes);

export default routes;
