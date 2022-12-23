// criando estrutura básica do servidor
import express from 'express';
import 'dotenv/config';
import bodyParser from 'body-parser';
import { Router } from 'express';
import tasksRouter from './routes/routes';

class App {
  public express: express.Application;
  public port: number;
  public routes: Router;

  public constructor() {
    this.express = express();
    this.port = 3003;
    this.routes = tasksRouter;
  }

  //adiconando middlewares
  private middlewares(): void {
    this.express.use(bodyParser.urlencoded({ extended: true }));
    this.express.use(bodyParser.json());
    this.express.use(this.routes);
  }

    

  public start(): void {
    this.middlewares();
    this.express.listen(this.port, () => {
      console.log(`Server started on port ${this.port}`);
    });
  }
}

export default new App();
