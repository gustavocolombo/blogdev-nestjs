import { Injectable, HttpStatus, HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Author } from 'src/modules/shared/entities/author.entity';
import { Repository } from 'typeorm';
import ICreateAuthorDTO from '../dtos/ICreateAuthorDTO';

@Injectable()
export class AuthorService {
  constructor(
    @InjectRepository(Author) private authorRepository: Repository<Author>,
  ) {}

  async execute({ name, password, email }: ICreateAuthorDTO): Promise<Author> {
    try {
      const findToCreate = await this.authorRepository.findOne({
        where: { email },
      });

      if (findToCreate) {
        throw new HttpException(
          'This email is already in use',
          HttpStatus.CONFLICT,
        );
      }

      const author = this.authorRepository.create({ name, password, email });

      await this.authorRepository.save(author);

      return author;
    } catch (err) {
      throw new HttpException(
        'This email is already in use',
        HttpStatus.CONFLICT,
      );
    }
  }
}
