import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreatePosts1723936586310 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'posts',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'title',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'content',
            type: 'text',
            isNullable: false,
          },
          {
            name: 'is_edited',
            type: 'boolean',
            default: false,
            isNullable: false,
          },
          {
            name: 'likes',
            type: 'int',
            default: 0,
            isNullable: false,
          },
          {
            name: 'replies_count',
            type: 'int',
            default: 0,
            isNullable: false,
          },
          {
            name: 'status',
            type: 'enum',
            enum: ['draft', 'published', 'archived'],
            default: `'draft'`,
            isNullable: false,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
            isNullable: false,
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
            isNullable: false,
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('posts');
  }
}
