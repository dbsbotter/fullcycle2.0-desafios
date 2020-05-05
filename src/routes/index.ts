import { Router } from 'express';
import dashboradRoutes from './dashboard.routes';

const routes = Router();

routes.get('/', dashboradRoutes);

export default routes;
