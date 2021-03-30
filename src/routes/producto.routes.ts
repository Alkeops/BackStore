import { Router } from "express";
import { productoController as Controller } from "@controllers";
import { validateProducto, validateUser } from "@middlewares";

const productoRouter = Router();

productoRouter
  .get("/", Controller.all)
  .get("/:id", Controller.byId)
  .post(
    "/",
    validateUser.isAdmin,
    validateProducto.dataCreated,
    Controller.create
  )
  .patch(
    "/:id",
    validateUser.isAdmin,
    validateProducto.dataUpdate,
    Controller.update
  )
  .delete("/:id", validateUser.isAdmin, Controller.remove);

export default productoRouter;
