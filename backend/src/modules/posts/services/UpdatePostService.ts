import { getCustomRepository } from 'typeorm';
import { PostRepository } from '../typeorm/respositories/PostsRepository';
import Post from '../typeorm/entities/Post';
import AppError from '@shared/errors/AppError';

interface IRequest {
  id: string;
  title: string;
  content: string;
  is_edited: boolean;
  likes: number;
  replies_count: number;
  status: 'draft' | 'published' | 'archived';
}

class UpdatePostService {
  public async execute({
    id,
    title,
    content,
    is_edited,
    likes,
    replies_count,
    status,
  }: IRequest): Promise<Post> {
    const postsRepository = getCustomRepository(PostRepository);
    const post = await postsRepository.findOne(id);
    if (!post) throw new AppError('Post not found.');
    post.title = title;
    post.content = content;
    post.is_edited = is_edited;
    post.likes = likes;
    post.replies_count = replies_count;
    post.status = status;
    await postsRepository.save(post);

    return post;
  }
}

export default UpdatePostService;
