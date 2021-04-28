import { Router } from "express";
import { client } from "../index";
const authRouter = Router();

authRouter
  .get("/login", (req: any, res: any) => {
    /* client.get("user", (error, user) => {
      if (user) {
        let datos = JSON.parse(user);
        res.status(200).send(`Bienvenido ${datos.nombre}`);
      } else {
        client.set("user", JSON.stringify({ nombre: "Manuel" }));
        res.status(200).send("Bienvenido");
      }
    }); */
    if (!req.session.user) {
      req.session.user = { nombre: "Manuel" };
      res.status(201).send(`hola ${req.session.user.nombre}`);
    } else {
      res.status(201).send(`hola de nuevo`);
    }
  })
  .get("/logout", (req: any, res: any) => {
    if (!req.session.user) {
      res.status(200).send("Ninguna sesion iniciada");
    }
    req.session.destroy();
    res.status(200).send("Hasta luego");
  });

export default authRouter;
