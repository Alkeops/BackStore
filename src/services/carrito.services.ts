const fs = require("fs");
import { Carrito, ResponseC, Producto } from "@interfaces";
import { returnForApiCarrito } from "@utils";

const DIRFOLDER = `${__dirname}/carrito.txt`;
const initialState = {
  idCarrito: "H1N1",
  producto: [],
};

if (!fs.existsSync(DIRFOLDER))
  fs.writeFileSync(DIRFOLDER, JSON.stringify(initialState));
//Practicamente lo mismo que la clase ProductosServices
export class CarritoServices {
  state: Carrito;
  constructor() {
    this.state = initialState;
    this.init();
  }
  init = () => {
    const read = fs.readFileSync(DIRFOLDER);
    const data = JSON.parse(read);
    return (this.state = data);
  };
  all = (): ResponseC => {
    return returnForApiCarrito(200, "All Ok", this.state);
  };
  byId = (id: string): ResponseC => {
    const element = this.state.producto.find((element) => element.id === id)!;
    if (!element) return returnForApiCarrito(404, "Not Found", []);
    return returnForApiCarrito(200, "All clear", [element]);
  };
  post = (producto: Producto): ResponseC => {
    this.state.producto.push(producto);
    this.rewriteFile();
    return returnForApiCarrito(201, "Producto Agregado al carrito", [producto]);
  };
  delete = (id: string): ResponseC => {
    this.state.producto = this.state.producto.filter(
      (element) => element.id !== id
    );
    this.rewriteFile();
    console.log(this.state);
    return returnForApiCarrito(200, "Elemento borrado del carrito", []);
  };
  rewriteFile = () => {
    fs.writeFileSync(DIRFOLDER, JSON.stringify(this.state));
  };
}
