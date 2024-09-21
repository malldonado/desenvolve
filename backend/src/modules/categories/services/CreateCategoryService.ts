import { getCustomRepository } from 'typeorm';
import AppError from '@shared/errors/AppError';
import { hash } from 'bcryptjs';
import Categorie from '../typeorm/entities/Category';
import CategoriesRepository from '../typeorm/repositories/CategoriesRepository';

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryService {
  public async execute({ name, description }: IRequest): Promise<Categorie> {
    const categoryRepository = getCustomRepository(CategoriesRepository);

    const nameExists = await categoryRepository.findByName(name);
    if (nameExists) throw new AppError('Name already used.');

    const category = categoryRepository.create({
      name,
      description,
    });

    await categoryRepository.save(category);

    return category;
  }
}

export default CreateCategoryService;
