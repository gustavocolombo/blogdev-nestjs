import { Controller, Get, Param } from '@nestjs/common';
import { Posts } from 'src/modules/shared/entities/post.entity';
import { GetpostsService } from '../services/getposts.service';

@Controller('getposts')
export class GetpostsController {
  constructor(private getPostService: GetpostsService) {}

  @Get()
  async find(): Promise<Posts[]> {
    return this.getPostService.find();
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<Posts | null> {
    return this.getPostService.findById(id);
  }
}
