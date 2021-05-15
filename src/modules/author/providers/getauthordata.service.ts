import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Author } from 'src/modules/shared/entities/author.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class GetauthordataService {
  constructor(
    @InjectRepository(Author)
    private getAuthorDataRepository: Repository<Author>,
  ) {}

  async find(): Promise<Author[]> {
    try {
      const authors = await this.getAuthorDataRepository.find();
      return authors;
    } catch (err) {
      throw new HttpException('No Author was found', HttpStatus.NOT_FOUND);
    }
  }

  async findById(id: string): Promise<Author | null> {
    try {
      const findAuthor = await this.getAuthorDataRepository.findOne({
        where: { id },
      });

      if (!findAuthor) {
        throw new HttpException(
          'Author with this id was not found',
          HttpStatus.NOT_FOUND,
        );
      }

      return findAuthor || null;
    } catch (err) {
      throw new HttpException(
        'Author with this id was not found',
        HttpStatus.NOT_FOUND,
      );
    }
  }
}
