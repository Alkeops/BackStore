import { Producto, Response } from "@interfaces";
const returnForApiProductos = (
  code: number,
  desc: string,
  data: Array<Producto> | []
): Response => {
  return {
    status: {
      code,
      desc,
    },
    data,
    timestamp: +new Date(),
  };
};

export { returnForApiProductos };
