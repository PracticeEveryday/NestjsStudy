import { Router } from "express";
import { findAll, catService } from "./cats.service";
import { CatType } from "./cats.model";
const catRouter = Router();

// Read cat 전체 정보 읽어오기
catRouter.get("/cats", findAll);

// Read cat 하나 정보 읽어오기
catRouter.get("/cats/:id", (req, res) => {
  const id: string = req.params.id;
  const cat = catService.findcat(id);
  res.status(200).json(cat);
});

// Create
catRouter.post("/cats", (req, res) => {
  const newCatData: CatType = req.body;
  const newCat = catService.create(newCatData);
  res.status(200).json(newCat);
});

// Update
catRouter.put("/cats/:id", (req, res) => {
  const id: string = req.params.id;
  const updateData: CatType = req.body;

  const modifiedCat = catService.modify(id, updateData);
  res.status(200).json(modifiedCat);
});

export { catRouter };
