import { Router } from 'express';
import { getRepository } from 'typeorm';
import Maratona from '../models/Maratona';
import CreateMaratonaService from '../services/CreateMaratonaService';

const maratonaRoutes = Router();

maratonaRoutes.get('/', async (req, res) => {
  const maratonaRepository = getRepository(Maratona);

  const maratonas = await maratonaRepository.find();

  return res.json(maratonas);
});

maratonaRoutes.post('/', async (req, res) => {
  const { aula } = req.body;

  const createMaratona = new CreateMaratonaService();

  const maratona = await createMaratona.execute({ aula });

  return res.json(maratona);
});

export default maratonaRoutes;
