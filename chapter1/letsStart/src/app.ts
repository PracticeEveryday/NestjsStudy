// 데이터 모킹 : 테스트를 실행하기 위해 실제 데이터가 아닌 개발자가 필요에 의해서 만든 데이터임.

import * as express from "express";
// cat이라는 데이터 베이스에서 가져왔다고 생각할 것
import catsRouter from "./cats/cats.route";

// app의 싱글톤 패턴 도입 클래스로 하나의 인스턴스만 만들기!! 태초에 한 번만 만들기에 메모리 낭비 방지 가능
// 인스턴스 하나 찍힐 때 app이 하나 생성될 것임
class Server {
  public app: express.Application;
  constructor() {
    const app: express.Application = express();
    this.app = app;
  }

  private setRouter() {
    this.app.use(catsRouter);
  }
  private setMiddleware() {
    // next 다음 라우터로 이동하게 해주는 함수
    // middleware 거치고 해당하는 router찾음
    // use = middleware
    this.app.use((req, res, next) => {
      console.log(req.rawHeaders[1]);
      console.log("this is logging middleware");
      // next() 필수!!
      next();
    });

    // json middleware
    // express 에서 제공하는 body값 읽을 수 있게 하는 미들웨어
    this.app.use(express.json());

    this.setRouter();

    // error 처리 미들웨어가 될 수 있음..
    // 404 middleware
    this.app.use((req, res) => {
      console.log("this is error middleware");
      res.send({ error: "404 not found" });
    });
  }

  public listen() {
    this.setMiddleware();
    this.app.listen(8000, () => {
      console.log("server on..");
    });
  }
}

function init() {
  const server = new Server();
  server.listen();
}
init();

// middleware 양쪽을 연결하여 데이트를 주고 받을 수 있도록 중간에서 매개 역할을 하는 것

// 밑에 있으면 /cats/som 찾고 끝내버리기 때문에 middleware안나옴 so 내가 주고 싶은 곳에 적절하게 middleware 줄 수 있음.
// app.use((req, res, next) => {
//   console.log(req.rawHeaders[1]);
//   console.log("this is middleware");
//   // next() 필수!!
//   next();
// });
