import { Router } from "express";
import productoRouter from "./producto.routes";
import carritoRouter from "./carrito.routes";

const routes = Router();

routes.use("/productos", productoRouter);
routes.use("/carrito", carritoRouter);

export default routes;
