import { Router } from "express";

const authRouter = Router();

authRouter
    .get("/login", (req, res) => {
        res.send("hola")
    })
    .get("/logout", (req, res) => {
        res.send("hola")
    })


export default authRouter;