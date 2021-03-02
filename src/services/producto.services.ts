const fs = require("fs");

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

if (!fs.existsSync("./productos.txt"))
  fs.writeFileSync("./productos.txt", JSON.stringify([]));

export class productosServices {
  algoaqui() {}
}
