import { Router } from "express";
import productoRouter from "./producto.routes";
import carritoRouter from "./carrito.routes";
import authRouter from "./auth.routes";

const routes = Router();

routes.use("/productos", productoRouter);
routes.use("/carrito", carritoRouter);
routes.use("/auth", authRouter);

export default routes;
