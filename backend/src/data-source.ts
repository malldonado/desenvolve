// src/typeorm/data-source.ts
import Post from '@modules/posts/typeorm/entities/Post';
import { createConnection } from 'typeorm';
export const createDatabaseConnection = async () => {
  return await createConnection({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'docker',
    database: 'desenvolve',
    entities: [Post], // Suas entidades aqui
    synchronize: true,
    logging: false,
  });
};
