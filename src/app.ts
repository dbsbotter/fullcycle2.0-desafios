/* eslint-disable */
import 'reflect-metadata';

import express, { NextFunction, Response, Request } from 'express';
import routes from './routes';
import AppError from './errors/AppError';

import 'express-async-errors';

import './database';

const app = express();

app.use(express.json());

app.use(routes);

app.use((err: Error, req: Request, res: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  return res.status(500).json({
    status: 'error',
    message: 'Internal Server Error',
  });
});

app.listen(3000, () => {
  console.log('Up on 3000');
});
