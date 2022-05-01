import { CatType } from "./cats.model";
import { Request, Response } from "express";
export declare const findAll: (req: Request, res: Response) => void;
export declare class catService {
    static findcat: (id: string) => CatType[];
    static create: (newCatData: CatType) => CatType[];
    static modify: (id: string, updateData: CatType) => undefined;
    static modifyPartial: (id: string, updateData: object) => undefined;
    static delete: (id: string) => CatType[];
}
