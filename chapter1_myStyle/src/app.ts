import * as express from "express";
import { catRouter } from "./cats/cats.route";

const app: express.Application = express();

app.get("/", (req, res) => {
  res.status(200).json({ status: "succ" });
});

app.use(catRouter);

app.listen(3000, () => console.log("3000번 포트 온"));
