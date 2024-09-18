import { getCustomRepository } from 'typeorm';
import { PostRepository } from '../typeorm/respositories/PostsRepository';
import AppError from '@shared/errors/AppError';

interface IRequest {
  id: string;
}

class DeletePostService {
  public async execute({ id }: IRequest): Promise<void> {
    const postsRepository = getCustomRepository(PostRepository);
    const post = await postsRepository.findOne(id);
    if (!post) throw new AppError('Post not found.');
    await postsRepository.remove(post);
  }
}

export default DeletePostService;
