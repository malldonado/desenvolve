import { EntityRepository, Repository } from 'typeorm';
import Categorie from '../entities/Category';

@EntityRepository(Categorie)
class CategoriesRepository extends Repository<Categorie> {
  public async findByName(name: string): Promise<Categorie | undefined> {
    const category = await this.findOne({
      where: {
        name,
      },
    });
    return category;
  }

  public async findById(id: string): Promise<Categorie | undefined> {
    const category = await this.findOne({
      where: {
        id,
      },
    });
    return category;
  }

  public async findByDescription(
    description: string,
  ): Promise<Categorie | undefined> {
    const category = await this.findOne({
      where: {
        description,
      },
    });
    return category;
  }
}

export default CategoriesRepository;
