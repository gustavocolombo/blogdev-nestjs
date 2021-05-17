import { Controller, Param, Post } from '@nestjs/common';
import { Posts } from 'src/modules/shared/entities/post.entity';
import { CreatelikeService } from '../services/createlike.service';

@Controller('createlike')
export class CreatelikeController {
  constructor(private createLikeService: CreatelikeService) {}

  @Post(':id')
  async createLike(@Param('id') id: string): Promise<Posts> {
    return this.createLikeService.execute(id);
  }
}
