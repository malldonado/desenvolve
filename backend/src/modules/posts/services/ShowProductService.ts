import { getCustomRepository } from 'typeorm';
import { PostRepository } from '../typeorm/respositories/PostsRepository';
import Post from '../typeorm/entities/Post';
import AppError from '@shared/errors/AppError';

interface IRequest {
  id: string;
}

class ShowPostService {
  public async execute({ id }: IRequest): Promise<Post> {
    const postsRepository = getCustomRepository(PostRepository);
    const post = await postsRepository.findOne(id);
    if (!post) throw new AppError('Post not found.');
    return post;
  }
}

export default ShowPostService;
