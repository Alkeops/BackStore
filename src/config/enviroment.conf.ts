import dotenv from "dotenv";
dotenv.config();
//URL & PORT ENV VARS
const BASE_GLOBAL_URL = process.env.BASE_URL || "127.0.0.1";
const PORT = process.env.PORT || "8080";
const GLOBAL_PORT: number = +PORT; //CONVERTIR STRING A NUMERO
//MONGO ENV_VARS
const MONGODB_GLOBAL_PORT = process.env.MONGODB_PORT || "27017";
const MONGODB_GLOBAL_URI =
  process.env.MONGODB_URI || "mongodb://127.0.0.1:" + MONGODB_GLOBAL_PORT;
const MONGODB_GLOBAL_USER = process.env.MONGODB_USER || "";
const MONGODB_GLOBAL_PASS = process.env.MONGODB_PASS || "";
const MONGODB_GLOBAL_DB = process.env.MONGODB_DB || "back-store";

export {
  BASE_GLOBAL_URL,
  GLOBAL_PORT,
  MONGODB_GLOBAL_PASS,
  MONGODB_GLOBAL_USER,
  MONGODB_GLOBAL_URI,
  MONGODB_GLOBAL_DB,
};
