// 데이터 모킹 : 테스트를 실행하기 위해 실제 데이터가 아닌 개발자가 필요에 의해서 만든 데이터임.

import * as express from "express";
// cat이라는 데이터 베이스에서 가져왔다고 생각할 것
import { Cat, CatType } from "./app.model";
const app: express.Express = express();

const data: number[] = [1, 2, 3, 4];

// next 다음 라우터로 이동하게 해주는 함수
// middleware 거치고 해당하는 router찾음
// use = middleware
app.use((req, res, next) => {
  console.log(req.rawHeaders[1]);
  console.log("this is logging middleware");
  // next() 필수!!
  next();
});

// READ 고양이 전체 데이터 다 조회
app.get("/cats", (req, res) => {
  // mySQL mongoDB라고 생각하자
  try {
    const cats = Cat;
    res.status(200).send({
      status: true,
      data: {
        cats,
      },
    });
  } catch (error: any) {
    res.status(400).send({
      status: false,
      message: error.message,
    });
  }
});

// READ 특정 고양이 데이터 조회
// 동적 라우팅
app.get("/cats/:id", (req, res) => {
  // mySQL mongoDB라고 생각하자
  try {
    const id = req.params.id;

    const cats = Cat.find((cat) => {
      return cat.id === id;
    });

    res.status(200).send({
      status: true,
      data: {
        cats,
      },
    });
  } catch (error: any) {
    res.status(400).send({
      status: false,
      message: error.message,
    });
  }
});

// json middleware
// express 에서 제공하는 body값 읽을 수 있게 하는 미들웨어
app.use(express.json());

// CREATE 새로운 고양이 추가
// 실제 db 없으니 저장되지 않음
app.post("/cats", (req, res) => {
  try {
    const data = req.body;
    Cat.push(data);
    res.status(200).send({
      status: "succ",
      data: { data },
    });
  } catch (error: any) {
    res.status(400).send({
      status: false,
      message: error.message,
    });
  }
});

// error 처리 미들웨어가 될 수 있음..
// 404 middleware
app.use((req, res) => {
  console.log("this is error middleware");
  res.send({ error: "404 not found" });
});

app.listen(8000, () => {
  console.log("server on..");
});

// middleware 양쪽을 연결하여 데이트를 주고 받을 수 있도록 중간에서 매개 역할을 하는 것

// 밑에 있으면 /cats/som 찾고 끝내버리기 때문에 middleware안나옴 so 내가 주고 싶은 곳에 적절하게 middleware 줄 수 있음.
app.use((req, res, next) => {
  console.log(req.rawHeaders[1]);
  console.log("this is middleware");
  // next() 필수!!
  next();
});
