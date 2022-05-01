import * as express from "express";
import { catRouter } from "./cats/cats.route";

class Server {
  app: express.Application;
  constructor() {
    const app: express.Application = express();
    this.app = app;
  }

  private setRouter() {
    this.app.get("/", (req, res) => {
      res.status(200).json({ status: "succ" });
    });
    this.app.use(catRouter);
  }

  private setMiddleware() {
    this.app.use((req, res, next) => {
      console.log(req.rawHeaders[1]);
      console.log("this is logging middleware");
      // next() 필수!!
      next();
    });
    this.app.use(express.json());

    this.setRouter();

    this.app.use((req, res) => {
      console.log("this is error middleware");
      res.send({ error: "404 not found" });
    });
  }

  public init() {
    this.setMiddleware;
    this.app.listen(8000, () => {
      console.log("8000번 포트 온");
    });
  }
}

const server = new Server();
server.init();
