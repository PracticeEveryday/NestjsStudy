import { CatType } from "./cats.model";
import { Request, Response } from "express";
export declare const findAll: (req: Request, res: Response) => void;
export declare class catService {
    static findcat: (id: string) => CatType[];
}
