import { Body, Controller, Post } from '@nestjs/common';
import { Posts } from 'src/modules/shared/entities/post.entity';
import { CreatecommentService } from '../services/createcomment.service';

@Controller('createcomment')
export class CreatecommentController {
  constructor(private createCommentService: CreatecommentService) {}

  @Post()
  async createComment(@Body() post: Posts): Promise<Posts> {
    return this.createCommentService.execute(post);
  }
}
