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

export { Producto, Data };
