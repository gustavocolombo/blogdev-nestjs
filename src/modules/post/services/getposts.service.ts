import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Posts } from 'src/modules/shared/entities/post.entity';
import { Repository } from 'typeorm';

@Injectable()
export class GetpostsService {
  constructor(
    @InjectRepository(Posts) private getPostsRepository: Repository<Posts>,
  ) {}

  async find(): Promise<Posts[]> {
    try {
      const findAllPosts = await this.getPostsRepository.find();

      return findAllPosts;
    } catch (err) {
      throw new HttpException('No post was found', HttpStatus.NOT_FOUND);
    }
  }

  async findById(id: string): Promise<Posts | null> {
    try {
      const findPost = await this.getPostsRepository.findOne({ where: { id } });

      if (!findPost) {
        throw new HttpException('No post was found', HttpStatus.NOT_FOUND);
      }

      return findPost;
    } catch (err) {
      throw new HttpException('No post was found', HttpStatus.NOT_FOUND);
    }
  }
}
