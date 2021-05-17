import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { Author } from './author.entity';

@Entity('posts')
export class Posts {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  message: string;

  @JoinColumn({ name: 'author_id' })
  @ManyToOne(() => Posts)
  author_id: Author;

  @Column()
  topic: string;

  @Column({ default: 0 })
  likes: number;

  @Column('simple-array')
  comments: string;

  @Column()
  date: Date;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
