import express from "express";

const validateUser = {
  isAdmin: (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    const {
      baseUrl,
      query: { apiKey },
      route: { methods },
    } = req;
    if (apiKey !== "admin") {
      res.status(401).json({
        error: -1,
        description: `ruta [ ${baseUrl} ] método [ ${Object.keys(
          methods
        )[0].toUpperCase()} ] no autorizado`,
      });
      next("Unauthorized");
    }
    next();
  },
};

export { validateUser };
