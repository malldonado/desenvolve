import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import CategoriesController from '../controllers/CategoriesController';
import isAuthenticated from '@shared/http/middlewares/isAuthenticated';

const categoriesRouter = Router();
const categoriesController = new CategoriesController();

categoriesRouter.use(isAuthenticated);
categoriesRouter.get('/', categoriesController.index);
categoriesRouter.get(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  categoriesController.show,
);
categoriesRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      description: Joi.string().required(),
    },
  }),
  categoriesController.create,
);
categoriesRouter.put(
  '/:id',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      description: Joi.string().required(),
    },
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  categoriesController.update,
);
categoriesRouter.delete(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  categoriesController.delete,
);

export default categoriesRouter;
