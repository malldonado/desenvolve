import { getCustomRepository } from 'typeorm';
import { PostRepository } from '../typeorm/respositories/PostsRepository';
import Post from '../typeorm/entities/Post';

class ListPostService {
  public async execute(): Promise<Post[]> {
    const postsRepository = getCustomRepository(PostRepository);
    const posts = postsRepository.find();
    return posts;
  }
}

export default ListPostService;
