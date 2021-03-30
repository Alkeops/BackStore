const mongoose = require("mongoose");
import {
  MONGODB_GLOBAL_PASS,
  MONGODB_GLOBAL_URI,
  MONGODB_GLOBAL_USER,
} from "./enviroment.conf";

mongoose.connect(MONGODB_GLOBAL_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  user: MONGODB_GLOBAL_USER,
  pass: MONGODB_GLOBAL_PASS,
});

export { mongoose };
