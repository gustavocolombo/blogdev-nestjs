import { Body, Controller, Post } from '@nestjs/common';
import { Author } from 'src/modules/shared/entities/author.entity';
import ICreateAuthorDTO from '../dtos/ICreateAuthorDTO';
import { AuthorService } from '../providers/author.service';

@Controller('author')
export class AuthorController {
  constructor(private authorService: AuthorService) {}

  @Post()
  async create(@Body() author: ICreateAuthorDTO): Promise<Author> {
    return this.authorService.execute(author);
  }
}
