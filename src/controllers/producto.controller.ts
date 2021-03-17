import express from "express";
import { v4 as uuidv4 } from "uuid";
import { ProductosServices } from "@services";

const Service = new ProductosServices();

const productoController = {
  all: async (req: express.Request, res: express.Response) => {
    const response = await Service.all();
    res.status(response.status.code).json(response);
  },
  byId: async (req: express.Request, res: express.Response) => {
    const response = await Service.byId(req.params.id);
    res.status(response.status.code).json(response);
  },
  create: async (req: express.Request, res: express.Response) => {
    const newProduct = {
      ...req.body,
      id: uuidv4(),
      timestamp: +new Date(),
    };
    const response = await Service.post(newProduct);
    res.status(response.status.code).json(response);
  },
  update: async (req: express.Request, res: express.Response) => {
    const response = await Service.update(req.params.id, req.body);
    res.status(response.status.code).json(response);
  },
  remove: async (req: express.Request, res: express.Response) => {
    const response = await Service.delete(req.params.id);
    res.status(response.status.code).json(response);
  },
};

export default productoController;
