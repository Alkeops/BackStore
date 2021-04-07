import express from "express";
import { ProductosServices } from "@services";

const Service = new ProductosServices();

const productoController = {
  all: async (req: express.Request, res: express.Response) => {
    const response = await Service.all(req.query);
    res.status(response.status.code).json(response);
  },
  test: (req: express.Request, res: express.Response) => {
    const response = Service.test(req.query.cant);
    res.status(response.status.code).json(response);
  },
  byId: async (req: express.Request, res: express.Response) => {
    const response = await Service.byId(req.params.id);
    res.status(response.status.code).json(response);
  },
  create: async (req: express.Request, res: express.Response) => {
    const response = await Service.post(req.body);
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

export { productoController };
