import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Author } from '../shared/entities/author.entity';
import { AuthorController } from './controller/author.controller';
import { GetauthordataController } from './controller/getauthordata.controller';
import { AuthorService } from './providers/author.service';
import { GetauthordataService } from './providers/getauthordata.service';

@Module({
  imports: [TypeOrmModule.forFeature([Author])],
  controllers: [AuthorController, GetauthordataController],
  providers: [AuthorService, GetauthordataService],
})
export class AuthorModule {}
