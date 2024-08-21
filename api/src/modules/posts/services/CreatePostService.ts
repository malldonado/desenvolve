import { getCustomRepository } from 'typeorm';
import { PostRepository } from '../typeorm/respositories/PostsRepository';
import Post from '../typeorm/entities/Post';

interface IRequest {
  title: string;
  content: string;
  is_edited: boolean;
  likes: number;
  replies_count: number;
  status: 'draft' | 'published' | 'archived';
}

class CreatePostService {
  public async execute({
    title,
    content,
    is_edited,
    likes,
    replies_count,
    status,
  }: IRequest): Promise<Post> {
    const postsRepository = getCustomRepository(PostRepository);
    const post = postsRepository.create({
      title,
      content,
      is_edited,
      likes,
      replies_count,
      status,
    });
    await postsRepository.save(post);
    return post;
  }
}

export default CreatePostService;
