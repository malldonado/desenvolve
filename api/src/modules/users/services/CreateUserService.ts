import { getCustomRepository } from 'typeorm';
import AppError from '@shared/errors/AppError';
import User from '../typeorm/entities/User';
import UsersRepository from '../typeorm/repositories/UsersRepository';
import { hash } from 'bcryptjs';

interface IRequest {
  name: string;
  username: string;
  email: string;
  password: string;
}

class CreateUserService {
  public async execute({
    name,
    username,
    email,
    password,
  }: IRequest): Promise<User> {
    const usersRepository = getCustomRepository(UsersRepository);

    const usernameExists = await usersRepository.findByUsername(username);
    if (usernameExists) throw new AppError('Username address already used.');

    const emailExists = await usersRepository.findByEmail(email);
    if (emailExists) throw new AppError('Email address already used.');

    const hashedPassword = await hash(password, 8);

    const user = usersRepository.create({
      name,
      username,
      email,
      password: hashedPassword,
    });

    await usersRepository.save(user);

    return user;
  }
}

export default CreateUserService;
