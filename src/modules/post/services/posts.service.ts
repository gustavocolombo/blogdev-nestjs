import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Posts } from 'src/modules/shared/entities/post.entity';
import { Repository } from 'typeorm';
import ICreatePostDTO from '../dtos/ICreatePostDTO';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Posts) private postRepository: Repository<Posts>,
  ) {}

  async execute({
    author_id,
    message,
    topic,
    date,
  }: ICreatePostDTO): Promise<Posts> {
    try {
      const postValidate = await this.postRepository.findOne({
        where: { message },
      });

      if (postValidate) {
        throw new HttpException(
          'This message has been created, not spammed',
          HttpStatus.UNAUTHORIZED,
        );
      }

      const post = this.postRepository.create({
        author_id,
        message,
        topic,
        date,
      });
      await this.postRepository.save(post);

      return post;
    } catch (err) {
      throw new HttpException(
        'This message has been created, not spammed',
        HttpStatus.UNAUTHORIZED,
      );
    }
  }
}
