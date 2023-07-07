"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var import_express = __toESM(require("express"));
var import_mongoose = __toESM(require("mongoose"));
var import_helmet = __toESM(require("helmet"));
var import_variables = require("./config/variables");
var import_userRouters = __toESM(require("./routes/userRouters"));
const session = require("express-session");
const passport = require("passport");
const connectEnsureLogin = require("connect-ensure-login");
const app = (0, import_express.default)();
app.use(import_express.default.json());
app.use((0, import_helmet.default)());
app.use(import_express.default.urlencoded({ extended: true }));
app.use("/user", import_userRouters.default);
app.post("/ping", (req, res) => {
  res.status(200).json({ message: "hai ping" });
});
console.log({ DB: import_variables.DB });
import_mongoose.default.connect(import_variables.DB).catch((err) => {
  console.log("database configuration error", err);
});
app.listen(import_variables.PORT, () => {
  console.log(`server running in port ${import_variables.PORT} `);
});
//# sourceMappingURL=index.js.map
