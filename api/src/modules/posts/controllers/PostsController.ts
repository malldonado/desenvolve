import { Request, Response } from 'express';
import ListPostService from '../services/ListPostService';
import ShowPostService from '../services/ShowProductService';
import CreatePostService from '../services/CreatePostService';
import UpdatePostService from '../services/UpdatePostService';
import DeletePostService from '../services/DeleteProductService';

export default class ProductsController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listPosts = new ListPostService();
    const post = await listPosts.execute();
    return response.json(post);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const showPost = new ShowPostService();
    const post = await showPost.execute({ id });
    return response.json(post);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const {
      title,
      content,
      is_edited,
      likes,
      replies_count,
      status,
    } = request.body;
    const createPost = new CreatePostService();
    const post = await createPost.execute({
      title,
      content,
      is_edited,
      likes,
      replies_count,
      status,
    });
    return response.json(post);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const {
      title,
      content,
      is_edited,
      likes,
      replies_count,
      status,
    } = request.body;
    const updatePost = new UpdatePostService();
    const post = await updatePost.execute({
      id,
      title,
      content,
      is_edited,
      likes,
      replies_count,
      status,
    });
    return response.json(post);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const deletePost = new DeletePostService();
    await deletePost.execute({ id });
    return response.json([]);
  }
}
