import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthorModule } from './modules/author/author.module';
import { Author } from './modules/shared/entities/author.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'postsdevnest',
      entities: [Author],
      retryDelay: 3000,
      retryAttempts: 10,
    }),
    TypeOrmModule.forFeature([Author]),
    AuthorModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
