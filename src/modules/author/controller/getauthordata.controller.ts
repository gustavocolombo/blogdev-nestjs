import { Controller, Get, Param } from '@nestjs/common';
import { Author } from 'src/modules/shared/entities/author.entity';
import { GetauthordataService } from '../providers/getauthordata.service';

@Controller('getauthordata')
export class GetauthordataController {
  constructor(private getAuthorDataService: GetauthordataService) {}

  @Get()
  async find(): Promise<Author[]> {
    return this.getAuthorDataService.find();
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<Author> {
    return this.getAuthorDataService.findById(id);
  }
}
