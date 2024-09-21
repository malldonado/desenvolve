import { Request, Response, NextFunction } from 'express';
import { RateLimiterRedis } from 'rate-limiter-flexible';
import AppError from '@shared/errors/AppError';
import Redis from 'ioredis';

const redisClient = new Redis({
  host: process.env.REDIS_HOST,
  port: Number(process.env.REDIS_PORT),
  password: process.env.REDIS_PASS || undefined,
});

const limiter = new RateLimiterRedis({
  storeClient: redisClient,
  keyPrefix: 'ratelimit',
  points: 5,
  duration: 1,
});

export default async function rateLimiter(
  request: Request,
  response: Response,
  next: NextFunction,
): Promise<void> {
  try {
    // Log para verificar o IP e se o consume está sendo chamado
    console.log(`Consumindo ponto para o IP: ${request.ip}`);

    await limiter.consume(request.ip);

    console.log('Requisição permitida');
    next();
  } catch (err) {
    if (err instanceof Error) {
      console.error('Erro de limite de requisições:', err.message);
    }

    next(new AppError('Too many requests', 429));
  }
}
