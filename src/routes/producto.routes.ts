import { Router } from "express";
import { productoController as Controller } from "@controllers";
import { validateProducto } from "@middlewares";

const productoRouter = Router();

productoRouter
  .get("/", Controller.all)
  .get("/:id", Controller.byId)
  .post("/", Controller.create)
  .patch("/:id", validateProducto.dataUpdate, Controller.update)
  .delete("/:id", Controller.remove);

export default productoRouter;
