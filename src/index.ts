import express from "express";
import http from "http";
import routes from "@routes";
import { mongoInit } from "@config";
import { BASE_GLOBAL_URL, GLOBAL_PORT } from "@config/enviroment.conf";


const app = express();
const serverHttp = http.createServer(app); //Socket Io
export const io = require("socket.io")(serverHttp);
io.on("connection", (socket: any) => {
  console.log("conectado")
  let mensajesGuardados: any = [];
  socket.emit(
    "mensajes",
    mensajesGuardados.length > 0 ? mensajesGuardados : "Sin mensajes"
  );
})

const mongoInits = mongoInit;

app.use(express.json());
app.use(routes);

const server = serverHttp.listen(GLOBAL_PORT, BASE_GLOBAL_URL, () =>
  console.log(`Server running in ${BASE_GLOBAL_URL}:${GLOBAL_PORT}`)
);
server.on("error", (error) => console.log(`Error ${error}`));
