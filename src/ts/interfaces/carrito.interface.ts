import { Producto } from "@interfaces";

interface Carrito {
  idCarrito: string;
  producto: Producto[];
}

interface Status {
  code: number;
  desc: string;
}

interface ResponseC {
  status: Status;
  data: Carrito | Producto[];
  timestamp: number;
}

export { Carrito, ResponseC };
