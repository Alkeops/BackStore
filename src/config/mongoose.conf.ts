const mongoose = require("mongoose");
import {
  MONGODB_GLOBAL_DB,
  MONGODB_GLOBAL_PASS,
  MONGODB_GLOBAL_URI,
  MONGODB_GLOBAL_USER,
} from "@config/enviroment.conf";

const mongoInit = mongoose.connect(
  MONGODB_GLOBAL_URI,
  {
    autoIndex: true,
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    dbName: MONGODB_GLOBAL_DB,
    user: MONGODB_GLOBAL_USER,
    pass: MONGODB_GLOBAL_PASS,
  },
  (error) => {
    if (error) return console.log(error);
    console.log("Connected");
  }
);

export { mongoInit };
