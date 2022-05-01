import { Cat, CatType } from "./cats.model";
import { Request, Response } from "express";

export const findAll = (req: Request, res: Response) => {
  const cats = Cat;
  res.status(200).json(cats);
};

export class catService {
  static findcat = (id: string) => {
    const cat = Cat.filter((cat) => cat.id === id);
    return cat;
  };

  static create = (newCatData: CatType) => {
    Cat.push(newCatData);
    return Cat;
  };

  static modify = (id: string, updateData: CatType) => {
    let result;
    Cat.filter((cat) => {
      if (cat.id === id) {
        cat = updateData;
        result = cat;
      }
    });
    return result;
  };
}
