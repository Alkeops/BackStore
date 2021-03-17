const fs = require("fs");
import { productosDB } from "../db/mariadb.db";
import { Producto, DataP, ResponseP } from "@interfaces";
import { returnForApiProductos } from "@utils";

const DIRFOLDER = `${__dirname}/productos.txt`;

if (!fs.existsSync(DIRFOLDER)) fs.writeFileSync(DIRFOLDER, JSON.stringify([]));

//TODO Servicios para Productos, probablemente crear una clase abstracta para todos los servicios y extender de ella.

export class ProductosServices {
  state: Producto[]; //Array de la interface Producto en ts/interfaces

  constructor() {
    this.state = [];
    this.init();
  }

  //Inicializa y llena el array del state con el archivo txt
  init = () => {
    const read = fs.readFileSync(DIRFOLDER);
    const data = JSON.parse(read);
    return (this.state = data);
  };

  //Devuelve todo lo que halla en el array
  all = async (): Promise<ResponseP> => {
    const data = await productosDB.select().table("productos");

    return returnForApiProductos(200, "All clear", data);
  };

  //Metodo repetido para la clase abstracta**
  byId = async (id: string): Promise<ResponseP> => {
    try {
      const element = await productosDB("productos").where({ id }).first();
      if (!element) {
        return returnForApiProductos(404, "Not Found", []);
      }
      return returnForApiProductos(200, "All clear", [element]);
    } catch (error) {
      console.log(error);
      return returnForApiProductos(404, "Algo salio mal", error);
    }
  };

  //Post de un nuevo Producto con la interface Producto falta validar si el producto ya existe
  post = async (producto: Producto): Promise<ResponseP> => {
    try {
      await productosDB("productos").insert(producto);
    } catch (error) {
      console.log(error);
    }
    return returnForApiProductos(201, "Producto creado", [producto]);
  };

  //Metodo repetido para clase abstracta**
  //TODO Comprobar si el id existe
  delete = async (id: string): Promise<ResponseP> => {
    try {
      const deleteProducto = await productosDB("productos").where({ id }).del();
      if (!deleteProducto)
        return returnForApiProductos(404, "Producto no encontrado", []);
      return returnForApiProductos(200, "Producto eliminado", []);
    } catch (error) {
      return returnForApiProductos(404, "Algo salio mal", error);
    }
  };

  update = async (id: string, data: DataP): Promise<ResponseP> => {
    try {
      const productoActualizado = await productosDB("productos")
        .where({ id })
        .update(data);
      if (productoActualizado)
        return returnForApiProductos(200, "Producto actualizado", []);
      return returnForApiProductos(404, "Producto no encontrado", []);
    } catch (error) {
      console.log(error);

      return returnForApiProductos(400, "Error", error);
    }
  };
}
