import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Categorie from '../typeorm/entities/Category';
import CategoriesRepository from '../typeorm/repositories/CategoriesRepository';

interface IRequest {
  id: string;
  name: string;
  description: string;
}

class UpdateCategoryService {
  public async execute({
    id,
    name,
    description,
  }: IRequest): Promise<Categorie> {
    const categoriesRepository = getCustomRepository(CategoriesRepository);
    const categorie = await categoriesRepository.findById(id);
    if (!categorie) throw new AppError('Category not found.');

    const categoryUpdate = await categoriesRepository.findByName(name);
    if (categoryUpdate && categoryUpdate.id !== id) {
      throw new AppError('There is already one user with this name.');
    }

    categorie.name = name;
    categorie.description = description;

    await categoriesRepository.save(categorie);

    return categorie;
  }
}

export default UpdateCategoryService;
