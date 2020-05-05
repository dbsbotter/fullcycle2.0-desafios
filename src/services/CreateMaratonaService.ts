import { getRepository } from 'typeorm';
import Maratona from '../models/Maratona';
import AppError from '../errors/AppError';

interface Request {
  aula: string;
}

class CreateMaratonaService {
  public async execute({ aula }: Request): Promise<Maratona> {
    const maratonaRepository = getRepository(Maratona);

    if (!aula) {
      throw new AppError('Descrição da aula não informada.');
    }

    const maratona = maratonaRepository.create({
      aula,
    });

    await maratonaRepository.save(maratona);

    return maratona;
  }
}

export default CreateMaratonaService;
