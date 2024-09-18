import { Router } from 'express';
import PostsController from '../controllers/PostsController';
import { celebrate, Joi, Segments } from 'celebrate';

const postRouter = Router();
const postsController = new PostsController();

postRouter.get('/', postsController.index);
postRouter.get(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  postsController.show,
);
postRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      title: Joi.string().required(),
      content: Joi.string().required(),
      is_edited: Joi.boolean().required(),
      likes: Joi.number().integer().optional(),
      replies_count: Joi.number().integer().optional(),
      status: Joi.string().valid('draft', 'published', 'archived').required(),
    },
  }),
  postsController.create,
);
postRouter.put(
  '/:id',
  celebrate({
    [Segments.BODY]: {
      title: Joi.string().required(),
      content: Joi.string().required(),
      is_edited: Joi.boolean().required(),
      likes: Joi.number().integer().optional(),
      replies_count: Joi.number().integer().optional(),
      status: Joi.string().valid('draft', 'published', 'archived').required(),
    },
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  postsController.update,
);
postRouter.delete(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  postsController.delete,
);

export default postRouter;
