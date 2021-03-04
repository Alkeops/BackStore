import { Producto, ResponseP, Carrito, ResponseC } from "@interfaces";

const returnForApiProductos = (
  code: number,
  desc: string,
  data: Producto[] | []
): ResponseP => {
  return {
    status: {
      code,
      desc,
    },
    data,
    timestamp: +new Date(),
  };
};

const returnForApiCarrito = (
  code: number,
  desc: string,
  data: Carrito | Producto[]
): ResponseC => {
  return {
    status: {
      code,
      desc,
    },
    data,
    timestamp: +new Date(),
  };
};
export { returnForApiProductos, returnForApiCarrito };
