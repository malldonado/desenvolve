import { EntityRepository, Repository } from 'typeorm';
import Post from '../entities/Post';

@EntityRepository(Post)
export class PostRepository extends Repository<Post> {
  public async findByName(title: string): Promise<Post | undefined> {
    const post = this.findOne({
      where: {
        title,
      },
    });

    return post;
  }
}
