// 데이터 모킹 : 테스트를 실행하기 위해 실제 데이터가 아닌 개발자가 필요에 의해서 만든 데이터임.

import * as express from "express";
// cat이라는 데이터 베이스에서 가져왔다고 생각할 것
import { Cat, CatType } from "./app.model";
const app: express.Express = express();

const data: number[] = [1, 2, 3, 4];

// front나 client가 endpoint에서 겟을 요청 했을 때 그에 대한 응답으로 db의 정보를 가져다가 준것!!
app.get("/", (req: express.Request, res: express.Response) => {
  res.send({ cats: Cat });
});

app.listen(8000, () => {
  console.log("server on..");
});
