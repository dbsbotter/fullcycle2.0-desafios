import { Router } from 'express';
import maratonaRoutes from './maratona.routes';

const routes = Router();

routes.use('/maratona', maratonaRoutes);

export default routes;
