const fs = require("fs");
import { Producto, Data } from "@interfaces";

const DIRFOLDER = `${__dirname}/productos.txt`;

if (!fs.existsSync(DIRFOLDER)) fs.writeFileSync(DIRFOLDER, JSON.stringify([]));

//TODO Servicios para Productos, probablemente crear una clase abstracta para todos los servicios y extender de ella.

export class ProductosServices {
  state: Array<Producto>; //Array de la interface Producto en ts/interfaces

  constructor() {
    this.state = [];
    this.init();
  }

  init = () => {
    //Inicializa y llena el array del state con el archivo txt
    const read = fs.readFileSync(DIRFOLDER);
    const data = JSON.parse(read);
    return (this.state = data);
  };
  //Devuelve todo lo que halla en el array
  all = () => this.state;
  //Metodo repetido para la clase abstracta**
  byId = (id: string) => this.state.find((element) => element.id === id);
  post = (producto: Producto) => {
    //Post de un nuevo Producto con la interface Producto
    this.state.push(producto);
    return this.rewriteFile();
  };
  //Metodo repetido para clase abstracta**
  delete = (id: string) => {
    this.state = this.state.filter((element) => element.id !== id);
    return this.rewriteFile();
  };

  update = (id: string, data: Data) => {
    /* Usa el metodo para traer el elemento preciso con el ID y se clona en una nueva variable, esto porque la asignacion simple solo guarda la referencia
    del objeto pero no el objeto en si */
    const element: Producto = Object.assign({}, this.byId(id));

    //Elimina el elemento del archivo
    this.delete(id);
    //Agrega el viejo elemento y lo que sean los datos que vienen de la data
    const elementUpdated = {
      ...element,
      ...data,
    };
    this.post(elementUpdated);
    //Cuando sea una base de datos y no un archivo se puede actualizar directamente el producto sin eliminarlo del array, por ahora no tiene sentido hacer dos procesos
    return elementUpdated;
  };

  rewriteFile = () => {
    fs.writeFileSync(DIRFOLDER, JSON.stringify(this.state));
  };
}
