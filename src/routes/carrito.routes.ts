import { Router } from "express";
import { carritoController as Controller } from "@controllers";

const carritoRouter = Router();

carritoRouter
  .get("/", Controller.all)
  .get("/:id", Controller.byId)
  .post("/", Controller.create)
  .delete("/:id", Controller.remove);

export default carritoRouter;
