import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthorModule } from './modules/author/author.module';
import { PostModule } from './modules/post/post.module';
import { Author } from './modules/shared/entities/author.entity';
import { Posts } from './modules/shared/entities/post.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'postsdevnest',
      entities: [Author, Posts],
      retryDelay: 3000,
      retryAttempts: 10,
    }),
    TypeOrmModule.forFeature([Author, Posts]),
    AuthorModule,
    PostModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
