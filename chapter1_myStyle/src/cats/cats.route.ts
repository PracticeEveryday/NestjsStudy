import { Router } from "express";
import { findAll, catService } from "./cats.service";
const catRouter = Router();

catRouter.get("/cats", findAll);

catRouter.get("/cats/:id", (req, res) => {
  const id: string = req.params.id;
  const cat = catService.findcat(id);
  res.status(200).json(cat);
});

export { catRouter };
