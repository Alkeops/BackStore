import { Router } from "express";

const authRouter = Router();

authRouter
    .get("/", (req, res) => {
        res.send("hola")
    })


export default authRouter;