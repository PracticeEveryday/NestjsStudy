// 데이터 모킹 : 테스트를 실행하기 위해 실제 데이터가 아닌 개발자가 필요에 의해서 만든 데이터임.

import * as express from "express";
// cat이라는 데이터 베이스에서 가져왔다고 생각할 것
import { Cat, CatType } from "./app.model";
const app: express.Express = express();

const data: number[] = [1, 2, 3, 4];

// front나 client가 endpoint에서 겟을 요청 했을 때 그에 대한 응답으로 db의 정보를 가져다가 준것!!
app.get("/", (req: express.Request, res: express.Response) => {
  // 요청이 어디서 왔는가 찍어보자
  console.log(req.rawHeaders);
  res.send({ cats: Cat });
});

app.get("/cats/blue", (req: express.Request, res: express.Response) => {
  console.log(req.rawHeaders[1]);
  res.send({ cats: Cat, blue: Cat[0] });
});

// 라우터 => cl font가 http get으로 endpoint로 넘겨주면
// back이 코드를 실행하며 데이터를 가공 해 res.send로 넘겨줌!!
app.get("/cats/som", (req: express.Request, res: express.Response) => {
  console.log(req.rawHeaders[1]);
  res.send({ som: Cat[1] });
});

app.listen(8000, () => {
  console.log("server on..");
});

// middleware 양쪽을 연결하여 데이트를 주고 받을 수 있도록 중간에서 매개 역할을 하는 것
