import { Router } from "express";
import { productoController as Controller } from "@controllers";

const productoRouter = Router();

productoRouter
  .get("/", Controller.all)
  .get("/:id", Controller.byId)
  .post("/", Controller.create)
  .patch("/:id", Controller.update)
  .delete("/:id", Controller.remove);

export default productoRouter;
