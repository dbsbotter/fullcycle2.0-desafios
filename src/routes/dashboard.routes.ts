import { Router } from 'express';

const dashboardRoutes = Router();

dashboardRoutes.get('/', (req, res) => res.send('Maratona Full Cycle 2.0'));

export default dashboardRoutes;
