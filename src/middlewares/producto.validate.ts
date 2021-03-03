import express from "express";

const initialData = {
  price: 0,
  thumbnail: "",
  name: "",
  description: "",
  stock: 0,
  code: "",
};

const validateProducto = {
  dataUpdate: (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    const parameters = req.body;
    Object.keys(parameters).map((element) => {
      if (!initialData.hasOwnProperty(element)) {
        res
          .status(400)
          .json(`[ ${element.toUpperCase()} ] no es una propiedad valida`);
        return next(`[ ${element.toUpperCase()} ] no es una propiedad valida`);
      }
    });
    return next();
  },
};

export { validateProducto };
