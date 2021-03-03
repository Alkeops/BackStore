import express from "express";
import { v4 as uuidv4 } from "uuid";
import { ProductosServices } from "@services";

const Service = new ProductosServices();

const productoController = {
  all: (req: express.Request, res: express.Response) => {
    res.status(200);
    res.json(Service.all());
  },
  byId: (req: express.Request, res: express.Response) => {
    const item = Service.byId(req.params.id);
    res.status(item ? 200 : 404).json(item || "No Encontrado");
  },
  create: (req: express.Request, res: express.Response) => {
    const { price, name, description, stock, code, thumbnail } = req.body;
    const newProduct = {
      price,
      name,
      description,
      stock,
      code,
      thumbnail,
      id: uuidv4(),
      timestamp: +new Date(),
    };
    Service.post(newProduct);
    res.status(201).json(newProduct);
  },
  update: (req: express.Request, res: express.Response) => {
    const { id } = req.params;
    const object = req.body;
    const elementUpdated = Service.update(id, object);
    res.status(202).json(elementUpdated);
  },
  remove: (req: express.Request, res: express.Response) => {
    Service.delete(req.params.id);
    res.status(200).json("Borrado");
  },
};

export default productoController;
