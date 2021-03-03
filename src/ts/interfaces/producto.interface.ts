interface Producto {
  id: string;
  timestamp: number;
  price: number;
  thumbnail: string;
  name: string;
  description: string;
  stock: number;
  code: string;
}

interface Data {
  price?: number;
  thumbnail?: string;
  name?: string;
  description?: string;
  stock?: number;
  code?: string;
}

interface Status {
  code: number;
  desc: string;
}
interface Response {
  status: Status;
  data: Array<Producto> | [];
  timestamp: number;
}
export { Producto, Data, Response };
