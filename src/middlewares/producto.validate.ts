import express from "express";

import { returnForApiProductos } from "@utils";

const initialData = {
  price: 0,
  thumbnail: "",
  name: "",
  description: "",
  stock: 0,
  code: "",
};

const validateKeys = (
  parameters: any,
  res: express.Response,
  next: express.NextFunction
) => {
  const arrayError: Array<string> = [];
  Object.keys(parameters).map((element) => {
    if (!initialData.hasOwnProperty(element)) {
      arrayError.push(element);
    }
  });
  if (arrayError.length) {
    const response = returnForApiProductos(
      400,
      `[ ${arrayError.join(" || ").toUpperCase()} ] no ${
        arrayError.length > 1 ? "son" : "es"
      } una propiedad valida`,
      []
    );
    res.status(response.status.code).json(response);
    return next(JSON.stringify(response));
  }
  return;
};

const validateProducto = {
  dataUpdate: (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    const parameters = req.body;
    /* Valida si las las keys mandadas en el json existen en el "schema" producto, si no existen se responde con la llave que no coincide.*/
    validateKeys(parameters, res, next);
    return next();
  },
  dataCreated: (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    const parameters = req.body;
    if (Object.keys(parameters).length !== Object.keys(initialData).length) {
      const response = returnForApiProductos(
        400,
        "Faltan datos para crear el Producto",
        []
      );
      res.status(response.status.code).json(response);
      return next(JSON.stringify(response));
    }
    validateKeys(parameters, res, next);

    return next();
  },
};

export { validateProducto };
