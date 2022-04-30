// service(business) logic 분리? 유지보수와 가독성 Up
// Nestjs의 가장 비슷한 패턴임!

import { Request, Response } from "express";
import { Cat, CatType } from "./cats.model";

// READ 고양이 전체 데이터 다 조회
export const readAllcat = (req: Request, res: Response) => {
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
};

// READ 특정 고양이 데이터 조회
// 동적 라우팅
export const readCat = (req: Request, res: Response) => {
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
};

// CREATE 새로운 고양이 추가
// 실제 db 없으니 저장되지 않음
export const createCat = (req: Request, res: Response) => {
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
};

// UPDATE 고양이 데이터 업데이트 => PUT
export const updateCat = (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const body = req.body;
    let result;
    Cat.forEach((cat) => {
      if (cat.id === id) {
        cat = body;
        result = cat;
      }
    });
    console.log(result);
    res.status(200).send({
      status: true,
      data: {
        cat: result,
      },
    });
  } catch (error: any) {
    res.status(400).send({
      status: false,
      message: error.message,
    });
  }
};

// UPDATE 고양이 데이터 부분적으로 업데이트 -> PATCH
export const updatePartialCat = (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const body = req.body;
    let result;
    Cat.forEach((cat) => {
      if (cat.id === id) {
        // 기존의 데이터 구조분해 => 새로운 데이터 구조분해 해주면 중복된 key에 대한 value 값을 바꿔줌!!
        cat = { ...cat, ...body };
        result = cat;
      }
    });
    console.log(result);
    res.status(200).send({
      status: true,
      data: {
        cat: result,
      },
    });
  } catch (error: any) {
    res.status(400).send({
      status: false,
      message: error.message,
    });
  }
};

// DELETE 고양이 데이터 삭제 => DELETE
export const deleteCat = (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    const newCat = Cat.filter((cat) => cat.id !== id);
    res.status(200).send({
      status: true,
      data: {
        cat: newCat,
      },
    });
  } catch (error: any) {
    res.status(400).send({
      status: false,
      message: error.message,
    });
  }
};
