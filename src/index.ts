import express from "express";
import http from "http";
import routes from "@routes";
import { mongoInit } from "@config";
import { BASE_GLOBAL_URL, GLOBAL_PORT } from "@config/enviroment.conf";

const app = express();
const mongoInits = mongoInit;
export const serverHttp = http.createServer(app); //Socket Io

app.use(express.json());
app.use(routes);

const server = serverHttp.listen(GLOBAL_PORT, BASE_GLOBAL_URL, () =>
  console.log(`Server running in ${BASE_GLOBAL_URL}:${GLOBAL_PORT}`)
);
server.on("error", (error) => console.log(`Error ${error}`));
