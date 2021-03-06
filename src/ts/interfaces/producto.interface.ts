interface Producto {
  price: number;
  thumbnail: string;
  name: string;
  description: string;
  stock: number;
  code: string;
}

interface DataP {
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
interface ResponseP {
  status: Status;
  data: Producto[];
  timestamp: number;
}
interface Query {
  name?: {};
  price?: {};
}
interface QueryApi {
  nm?: string;
  min?: number;
  max?: number;
}

export { Producto, DataP, ResponseP, Query, QueryApi };
