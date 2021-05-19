import { Author } from 'src/modules/shared/entities/author.entity';

export default interface ICreatePostDTO {
  id: string;
  author_id: Author;
  message: string;
  topic: string;
  comments?: string[];
  likes?: number;
  date: Date;
}
