const fs = require("fs");
import { Producto, DataP, ResponseP } from "@interfaces";
import { returnForApiProductos } from "@utils";
import { ProductoModel } from "@databases/models";

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
    const respuesta = await ProductoModel.find({});
    return returnForApiProductos(200, "All clear", respuesta);
  };

  //Metodo repetido para la clase abstracta**
  byId = async (id: string): Promise<ResponseP> => {
    try {
      const element = await ProductoModel.findById(id);
      return returnForApiProductos(200, "All clear", [element]);
    } catch (error) {
      console.log(error);
      return returnForApiProductos(404, "Not Found", []);
    }
  };

  //Post de un nuevo Producto con la interface Producto falta validar si el producto ya existe
  post = async (producto: Producto): Promise<ResponseP> => {
    try {
      const nuevoProducto = new ProductoModel(producto);
      await nuevoProducto.save();
      return returnForApiProductos(201, "Producto creado", [producto]);
    } catch (error) {
      console.log(error);
      return returnForApiProductos(500, "Error", [error]);
    }
  };

  //Metodo repetido para clase abstracta**
  //TODO Comprobar si el id existe
  delete = async (id: string): Promise<ResponseP> => {
    try {
      const { deletedCount } = await ProductoModel.deleteOne({ _id: id });
      if (!deletedCount) return returnForApiProductos(404, "Not Found", []);
      return returnForApiProductos(200, "Producto eliminado correctamente", []);
    } catch (error) {
      console.log(error);
      return returnForApiProductos(500, "Error", []);
    }
  };

  update = async (id: string, data: DataP): Promise<ResponseP> => {
    try {
      const element = await ProductoModel.findById(id);
      let counter: number = 0;
      for (let key of Object.keys(data)) {
        if (data[key] !== element[key]) counter++;
      }
      if (!counter) {
        return returnForApiProductos(418, "El producto ya esta actualizado", [
          element,
        ]);
      }
      const response = await ProductoModel.findByIdAndUpdate(
        { _id: id },
        { ...data },
        { new: true }
      );
      return returnForApiProductos(202, "Actualizado", [response]);
    } catch (error) {
      return returnForApiProductos(500, "Error", [error]);
    }
  };

  rewriteFile = () => {
    fs.writeFileSync(DIRFOLDER, JSON.stringify(this.state));
  };
}
