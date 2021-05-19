import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Posts } from 'src/modules/shared/entities/post.entity';
import { Repository } from 'typeorm';

interface IRequest {
  id: string;
  comments: string;
}

@Injectable()
export class CreatecommentService {
  constructor(
    @InjectRepository(Posts) private createCommentRepository: Repository<Posts>,
  ) {}

  async execute({ id, comments }: IRequest): Promise<Posts> {
    try {
      const findToAddComment = await this.createCommentRepository.findOne({
        where: { id },
      });

      if (!findToAddComment) {
        throw new HttpException('No post was found', HttpStatus.NOT_FOUND);
      }

      if (!findToAddComment.comments) {
        findToAddComment.comments = [];
      }

      findToAddComment.comments.push(comments);

      await this.createCommentRepository.save(findToAddComment);

      return findToAddComment;
    } catch (err) {
      throw new HttpException(err, HttpStatus.NOT_FOUND);
    }
  }
}
