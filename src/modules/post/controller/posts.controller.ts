import { Body, Controller, Post } from '@nestjs/common';
import { Posts } from 'src/modules/shared/entities/post.entity';
import ICreatePostDTO from '../dtos/ICreatePostDTO';
import { PostsService } from '../services/posts.service';

@Controller('posts')
export class PostsController {
  constructor(private postService: PostsService) {}

  @Post()
  async create(@Body() post: ICreatePostDTO): Promise<Posts> {
    return this.postService.execute(post);
  }
}
