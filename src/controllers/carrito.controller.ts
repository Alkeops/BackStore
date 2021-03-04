import express from "express";
import { CarritoServices } from "@services";
import { v4 as uuidv4 } from "uuid";

const Service = new CarritoServices();
const carritoController = {
  all: (req: express.Request, res: express.Response) => {
    const response = Service.all();
    res.status(response.status.code).json(response);
  },
  byId: (req: express.Request, res: express.Response) => {
    const response = Service.byId(req.params.id);
    res.status(response.status.code).json(response);
  },
  create: (req: express.Request, res: express.Response) => {
    const response = Service.post({
      ...req.body,
      id: uuidv4(),
      timestamp: +new Date(),
    });
    res.status(response.status.code).json(response);
  },
  remove: (req: express.Request, res: express.Response) => {
    const response = Service.delete(req.params.id);
    res.status(response.status.code).json(response);
  },
};

export default carritoController;
