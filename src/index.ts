import express from "express";
import http from "http";
import routes from "@routes";
import { mongoInit } from "@config";
import { BASE_GLOBAL_URL, GLOBAL_PORT } from "@config/enviroment.conf";

const normalizr = require("normalizr");
const schema = normalizr.schema;

const author = new schema.Entity("author", {}, { idAttribute: "id" });
const complete = new schema.Entity(
  "mensajes",
  {
    author: author
  },
  { idAttribute: "text" }
);

const app = express();
const serverHttp = http.createServer(app); //Socket Io
export const io = require("socket.io")(serverHttp);
io.on("connection", (socket: any) => {
  console.log("conectado");
  let mensajesGuardados: any = [
    {
      author: {
        id: "m_adan2012@outlook.com",
        nombre: "Manuel",
        apellido: "Adan",
        edad: 30,
        alias: "alkeops",
        avatar: "http://algo.com",
      },
      text: "Hola Mucho gusto",
    },
    {
      author: {
        id: "m_adan2012@outlook.com",
        nombre: "Manuel",
        apellido: "Adan",
        edad: 30,
        alias: "alkeops",
        avatar: "http://algo.com",
      },
      text: "Mi nombre es Manuel",
    },
    {
      author: {
        id: "m_adan2012@outlook.com",
        nombre: "Manuel",
        apellido: "Adan",
        edad: 30,
        alias: "alkeops",
        avatar: "http://algo.com",
      },
      text: "Hago esto",
    },
    {
      author: {
        id: "m_adan2012@outlook.com",
        nombre: "Manuel",
        apellido: "Adan",
        edad: 30,
        alias: "alkeops",
        avatar: "http://algo.com",
      },
      text: "Y estoy aqui",
    },
    {
      author: {
        id: "m_adan2022@outlook.com",
        nombre: "Manuel",
        apellido: "Adan",
        edad: 30,
        alias: "alkeops",
        avatar: "http://algo.com",
      },
      text: "Y tambien aqui",
    },
    {
      author: {
        id: "m_adan2022@outlook.com",
        nombre: "Manuel",
        apellido: "Adan",
        edad: 30,
        alias: "alkeops",
        avatar: "http://algo.com",
      },
      text: "Y por aqui",
    },
  ];
  console.log(normalizr.normalize(mensajesGuardados, [complete]));
  socket.emit(
    "mensajes",
    mensajesGuardados.length > 0 ? normalizr.normalize(mensajesGuardados, [complete]) : "Sin mensajes"
  );
});

const mongoInits = mongoInit;

app.use(express.json());
app.use(routes);

const server = serverHttp.listen(GLOBAL_PORT, BASE_GLOBAL_URL, () =>
  console.log(`Server running in ${BASE_GLOBAL_URL}:${GLOBAL_PORT}`)
);
server.on("error", (error) => console.log(`Error ${error}`));
