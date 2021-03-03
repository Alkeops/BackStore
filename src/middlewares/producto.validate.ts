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
    /* Valida si las las keys mandadas en el json existen en el "schema" producto, si no existen se responde con la llave que no coincide.*/
    const arrayError: Array<string> = [];
    Object.keys(parameters).map((element) => {
      if (!initialData.hasOwnProperty(element)) {
        arrayError.push(element);
      }
    });
    if (arrayError.length) {
      res
        .status(400)
        .json(
          `[ ${arrayError.join(" || ").toUpperCase()} ] no ${
            arrayError.length > 1 ? "son" : "es"
          } una propiedad valida`
        );
      return next(
        `[ ${arrayError.join("||").toUpperCase()} ] no es una propiedad valida`
      );
    }
    return next();
  },
};

export { validateProducto };
