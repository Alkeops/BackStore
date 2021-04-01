const fs = require("fs");
import { Producto, DataP, ResponseP } from "@interfaces";
import { returnForApiProductos } from "@utils";
import { ProductoModel } from "@models";

//TODO Servicios para Productos, probablemente crear una clase abstracta para todos los servicios y extender de ella.

export class ProductosServices {
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

  delete = async (id: string): Promise<ResponseP> => {
    try {
      /*findByIdAndDelte y findByIdAndUpdate retornan el objeto usado*/
      const response = await ProductoModel.findByIdAndDelete(id);
      if (!response) return returnForApiProductos(404, "Not Found", []);
      return returnForApiProductos(200, "Producto eliminado correctamente", [
        response,
      ]);
    } catch (error) {
      console.log(error);
      return returnForApiProductos(500, "Error", []);
    }
  };

  update = async (id: string, data: DataP): Promise<ResponseP> => {
    try {
      const element = await ProductoModel.findById(id);
      let counter: number = 0;
      /* Comparacion si hay algo que actualizar 
      TODO pasar a middleware*/
      for (let key of Object.keys(data)) {
        if (data[key] !== element[key]) counter++;
      }
      if (!counter) {
        return returnForApiProductos(418, "El producto ya esta actualizado", [
          element,
        ]);
      }
      const response = await ProductoModel.findByIdAndUpdate(
        id,
        { ...data },
        { new: true, runValidators: true, context: "query" }
        /* Opciones en este caso si new=true significa que devuelve el objeto actualizado, 
      sin parametros deevuelve el objeto anttes de actual */
      );
      return returnForApiProductos(202, "Actualizado", [response]);
    } catch (error) {
      return returnForApiProductos(500, "Error", [error]);
    }
  };
}
