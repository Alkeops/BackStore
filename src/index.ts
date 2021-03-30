import express from "express";
import http from "http";
import routes from "@routes";
import { mongoose } from "./config";

const app = express();

const Cat = mongoose.model("Cat", { name: String });

const kitty = new Cat({ name: "Zildjian" });
kitty.save().then(() => console.log("meow"));

export const serverHttp = http.createServer(app); //Socket Io

app.use(express.json());
app.use(routes);

const PORT = 8080;
const HOST = "127.0.0.1";
const server = serverHttp.listen(PORT, HOST, () =>
  console.log(`Server running in ${HOST}:${PORT}`)
);
server.on("error", (error) => console.log(`Error ${error}`));
