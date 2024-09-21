import { getCustomRepository } from 'typeorm';
import Categorie from '../typeorm/entities/Category';
import CategoriesRepository from '../typeorm/repositories/CategoriesRepository';

class ListCategoryService {
  public async execute(): Promise<Categorie[]> {
    const categoriesRepository = getCustomRepository(CategoriesRepository);
    const category = categoriesRepository.find();
    return category;
  }
}

export default ListCategoryService;
