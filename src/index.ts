import express from "express";
import http from "http";
import routes from "@routes";
import { productosDB } from "./db/mariadb.db";

const app = express();
export const serverHttp = http.createServer(app); //Socket Io

app.use(express.json());
app.use(routes);

productosDB();

const PORT = 8080;
const HOST = "127.0.0.1";
const server = serverHttp.listen(PORT, HOST, () =>
  console.log(`Server running in ${HOST}:${PORT}`)
);
server.on("error", (error) => console.log(`Error ${error}`));
