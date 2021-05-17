import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostsController } from './controller/posts.controller';
import { PostsService } from './services/posts.service';
import { Posts } from '../shared/entities/post.entity';
import { GetpostsController } from './controller/getposts.controller';
import { GetpostsService } from './services/getposts.service';
import { CreatelikeService } from './services/createlike.service';
import { CreatelikeController } from './controller/createlike.controller';
import { CreatecommentService } from './services/createcomment.service';
import { CreatecommentController } from './controller/createcomment.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Posts])],
  controllers: [
    PostsController,
    GetpostsController,
    CreatelikeController,
    CreatecommentController,
  ],
  providers: [
    PostsService,
    GetpostsService,
    CreatelikeService,
    CreatecommentService,
  ],
})
export class PostModule {}
