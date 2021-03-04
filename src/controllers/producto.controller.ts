import express from "express";
import { v4 as uuidv4 } from "uuid";
import { ProductosServices } from "@services";

const Service = new ProductosServices();

const productoController = {
  all: (req: express.Request, res: express.Response) => {
    const response = Service.all();
    res.status(response.status.code).json(response);
  },
  byId: (req: express.Request, res: express.Response) => {
    const response = Service.byId(req.params.id);
    res.status(response.status.code).json(response);
  },
  create: (req: express.Request, res: express.Response) => {
    const newProduct = {
      ...req.body,
      id: uuidv4(),
      timestamp: +new Date(),
    };
    const response = Service.post(newProduct);
    res.status(response.status.code).json(response);
  },
  update: (req: express.Request, res: express.Response) => {
    const response = Service.update(req.params.id, req.body);
    res.status(response.status.code).json(response);
  },
  remove: (req: express.Request, res: express.Response) => {
    Service.delete(req.params.id);
    res.status(200).json("Borrado");
  },
};

export default productoController;
