import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Categorie from '../typeorm/entities/Category';
import CategoriesRepository from '../typeorm/repositories/CategoriesRepository';

interface IRequest {
  id: string;
}

class ShowCategoryService {
  public async execute({ id }: IRequest): Promise<Categorie> {
    const categoriesRepository = getCustomRepository(CategoriesRepository);

    const user = await categoriesRepository.findById(id);

    if (!user) {
      throw new AppError('User not found.');
    }

    return user;
  }
}

export default ShowCategoryService;
