import { getCustomRepository } from 'typeorm';
import { PostRepository } from '../typeorm/respositories/PostsRepository';
import AppError from '@shared/errors/AppError';
import RedisCache from '@shared/cache/RedisCache';

interface IRequest {
  id: string;
}

class DeletePostService {
  public async execute({ id }: IRequest): Promise<void> {
    const postsRepository = getCustomRepository(PostRepository);
    const post = await postsRepository.findOne(id);
    if (!post) throw new AppError('Post not found.');

    const redisCache = new RedisCache();

    await redisCache.invalidate('api-desenvolve-posts');

    await postsRepository.remove(post);
  }
}

export default DeletePostService;
