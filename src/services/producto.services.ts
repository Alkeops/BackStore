const fs = require("fs");
import { Producto, Data, Response } from "@interfaces";

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
  all = (): Response => {
    return {
      status: {
        code: 200,
        desc: "All clear",
      },
      data: this.state,
      timestamp: +new Date(),
    };
  };
  //Metodo repetido para la clase abstracta**
  byId = (id: string): Response => {
    const element = this.state.find((element) => element.id === id)!;
    if (!element) {
      return {
        status: {
          code: 404,
          desc: "Not Found",
        },
        data: [],
        timestamp: +new Date(),
      };
    }
    return {
      status: {
        code: 200,
        desc: "All clear",
      },
      data: [element],
      timestamp: +new Date(),
    };
  };
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

  update = (id: string, data: Data): Response => {
    /* Usa el metodo para traer el elemento preciso con el ID y se clona en una nueva variable, esto porque la asignacion simple solo guarda la referencia
    del objeto pero no el objeto en si */
    const element: Producto = Object.assign(
      {},
      this.state.find((element) => element.id === id)!
    );

    /*
    Se hace un conteo de las veces que un valor de una llave de data se repite en el elemento. Si el counter es igual al numero de keys en data significa que los datos ya estaban actualizados
    */
    let counter = 0;
    let wrongType = false;
    Object.keys(data).forEach((e) => {
      if (element[e] === data[e]) counter++;
      if (typeof element[e] !== typeof data[e]) wrongType = true;
    });
    if (wrongType) {
      return {
        status: {
          code: 418,
          desc: "No coinciden los tipos",
        },
        data: [],
        timestamp: +new Date(),
      };
    }
    if (counter === Object.keys(data).length) {
      return {
        status: {
          code: 418,
          desc: "Nada por actualizar",
        },
        data: [],
        timestamp: +new Date(),
      };
    }

    //Elimina el elemento del archivo
    this.delete(id);
    //Agrega el viejo elemento y lo que sean los datos que vienen de la data
    const elementUpdated = {
      ...element,
      ...data,
    };
    this.post(elementUpdated);
    //Cuando sea una base de datos y no un archivo se puede actualizar directamente el producto sin eliminarlo del array, por ahora no tiene sentido hacer dos procesos
    {
      return {
        status: {
          code: 202,
          desc: "Actualizado",
        },
        data: [elementUpdated],
        timestamp: +new Date(),
      };
    }
  };

  rewriteFile = () => {
    fs.writeFileSync(DIRFOLDER, JSON.stringify(this.state));
  };
}
