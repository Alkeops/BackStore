import express from "express";
import { productosServices } from "@services";

const productoController = {
  all: (req: express.Request, res: express.Response) => {
    res.json("Hola");
  },
  byId: (req: express.Request, res: express.Response) => {
    res.json("Id");
  },
  create: (req: express.Request, res: express.Response) => {
    res.json("create");
  },
  update: (req: express.Request, res: express.Response) => {
    res.json("update");
  },
  remove: (req: express.Request, res: express.Response) => {
    res.json("remove");
  },
};

export default productoController;
