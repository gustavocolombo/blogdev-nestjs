import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Posts } from 'src/modules/shared/entities/post.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CreatelikeService {
  constructor(
    @InjectRepository(Posts) private postLikeRepository: Repository<Posts>,
  ) {}

  async execute(id: string): Promise<Posts> {
    try {
      const findPostToAddLike = await this.postLikeRepository.findOne({
        where: { id },
      });

      if (!findPostToAddLike) {
        throw new HttpException(
          'No post to add like was found',
          HttpStatus.NOT_FOUND,
        );
      }

      findPostToAddLike.likes += 1;
      await this.postLikeRepository.save(findPostToAddLike);

      return findPostToAddLike;
    } catch (err) {
      throw new HttpException(
        'No post to add like was found',
        HttpStatus.NOT_FOUND,
      );
    }
  }
}
