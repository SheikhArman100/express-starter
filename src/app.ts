import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import globalErrorHandler from './app/middleware/globalErrorHandler';
import { ApplicationRouters } from './app/routes';
import cookieParser from 'cookie-parser';
import config from './config';

const app: Application = express();

const allowedURL = [config.client_url];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedURL.includes(origin)) {
        callback(null, true);
      }
    },
    credentials: true,
  }),
);

// parser
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

// Testing
app.get('/', (req: Request, res: Response) => {
  return res.status(200).json({
    success: true,
    message: 'Welcome to inspecto.',
  });
});

// Routes
app.use('/api/v1', ApplicationRouters);

// No routes
app.use((req: Request, res: Response) => {
  return res.status(404).json({
    success: false,
    message: 'Not found',
    errorMessage: {
      path: req.originalUrl,
      message: 'Api not found!!! Wrong url, there is no route in this url.',
    },
  });
});

app.use(globalErrorHandler);

export default app;
