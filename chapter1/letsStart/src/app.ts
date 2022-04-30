// TS에서 express 돌리기
import * as express from "express";
// app express의 인스턴스 = 서버의 역할
const app: express.Express = express();
const port: number = 8000;

// /로 요청하면 어떻게 할거니
// 라우터: 프론트엔드랑 클라이언트가 백엔드에게 요청 할때 http의 get으로 '/' 이 경로로 요청했어
// 라우터릉 통해 받고
app.get("/", (req: express.Request, res: express.Response) => {
  // 어디서 누가 요청했는지

  // req 응답 받기 -> get ~~ body~~ 던져주고 쭉 가공 후
  // console.log(req);

  // 응답 보내주기
  // '/'에 요청하면 이런 식으로 데이터 줘서 front가 처리하는 것임
  res.send({ name: "kim", age: 28 });
});

// 서버 열자
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
