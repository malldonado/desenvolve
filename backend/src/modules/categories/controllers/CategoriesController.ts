import { Request, Response } from 'express';
import ListCategoryService from '../services/ListCategoryService';
import ShowCategoryService from '../services/ShowCategoryService';
import CreateCategoryService from '../services/CreateCategoryService';
import UpdateCategoryService from '../services/UpdateCategoryService';
import DeleteCategoryService from '../services/DeleteCategoryService';

export default class CategoriesController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listCategories = new ListCategoryService();
    const categorie = await listCategories.execute();
    return response.json(categorie);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const showCategory = new ShowCategoryService();
    const categorie = await showCategory.execute({ id });
    return response.json(categorie);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { name, description } = request.body;
    const createCategory = new CreateCategoryService();
    const categorie = await createCategory.execute({
      name,
      description,
    });
    return response.json(categorie);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { name, description } = request.body;
    const updateCategory = new UpdateCategoryService();
    const categorie = await updateCategory.execute({
      id,
      name,
      description,
    });
    return response.json(categorie);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const deleteCategory = new DeleteCategoryService();
    await deleteCategory.execute({ id });
    return response.json([]);
  }
}
