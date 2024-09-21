import { getRepository } from 'typeorm';
import Post from '../typeorm/entities/Post';
import RedisCache from '@shared/cache/RedisCache';

interface IPaginatePost {
  from: number;
  to: number;
  page: number;
  per_page: number;
  last_page: number;
  current_page: number;
  total: number;
  prev_page: number | null;
  next_page: number | null;
  data: Post[];
}

class ListPostService {
  public async execute(): Promise<IPaginatePost> {
    const postsRepository = getRepository(Post);

    const redisCache = new RedisCache();

    let post = await redisCache.recover<Post[]>('api-desenvolve-posts');

    if (!post) {
      post = await postsRepository.find();
    }

    await redisCache.save('api-desenvolve-posts', post);

    const posts = await postsRepository.createQueryBuilder('post').paginate(); // Certifique-se de que o método `paginate` está disponível

    return posts as IPaginatePost;
  }
}

export default ListPostService;
