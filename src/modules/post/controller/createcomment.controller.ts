import { Body, Controller, Post } from '@nestjs/common';
import { Posts } from 'src/modules/shared/entities/post.entity';
import { CreatecommentService } from '../services/createcomment.service';

interface IRequest {
  id: string;
  comments: string;
}

@Controller('createcomment')
export class CreatecommentController {
  constructor(private createCommentService: CreatecommentService) {}

  @Post()
  async createComment(@Body() { id, comments }: IRequest): Promise<Posts> {
    return this.createCommentService.execute({ id, comments });
  }
}
