import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class CreateLikeAndComment1621252441667 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'posts',
      new TableColumn({
        name: 'likes',
        type: 'integer',
        isNullable: true,
        generationStrategy: 'increment',
        default: 0,
      }),
    );
    await queryRunner.addColumn(
      'posts',
      new TableColumn({
        name: 'comments',
        type: 'varchar',
        isArray: true,
        isNullable: true,
        length: '1110',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('posts', 'comments');
    await queryRunner.dropColumn('posts', 'likes');
  }
}
