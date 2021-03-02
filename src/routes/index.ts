import { Router } from "express";
import productoRouter from "./producto.routes";

const routes = Router();

routes.use("/productos", productoRouter);

export default routes;
