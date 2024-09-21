import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Categorie from '../typeorm/entities/Category';
import CategoriesRepository from '../typeorm/repositories/CategoriesRepository';

interface IRequest {
  id: string;
}

class DeleteCategoryService {
  public async execute({ id }: IRequest): Promise<void> {
    const categoriesRepository = getCustomRepository(CategoriesRepository);

    const user = await categoriesRepository.findById(id);

    if (!user) {
      throw new AppError('User not found.');
    }

    await categoriesRepository.remove(user);
  }
}

export default DeleteCategoryService;
