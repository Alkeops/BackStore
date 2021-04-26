import { Router } from "express";

const authRouter = Router();

authRouter
    .get("/login", (req: any, res: any) => {
        console.log(req.session)
        res.send("hola")
    })
    .get("/logout", (req, res) => {
        res.send("hola")
    })


export default authRouter;