"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var bycrypt_exports = {};
__export(bycrypt_exports, {
  default: () => bycrypt_default
});
module.exports = __toCommonJS(bycrypt_exports);
var import_bcrypt = __toESM(require("bcrypt"));
var import_variables = require("../config/variables");
var bycrypt_default = {
  bcryptData: (data) => {
    return new Promise(async (resolve, reject) => {
      console.log("password:", data);
      console.log("salt:", import_variables.SALTROUND);
      try {
        const hash = await import_bcrypt.default.hash(data, parseInt(import_variables.SALTROUND));
        console.log(typeof hash);
        resolve(hash);
      } catch (error) {
        reject({
          error
        });
      }
    });
  },
  bcryptCompare: (password, hash) => {
    return new Promise((resolve, reject) => {
      import_bcrypt.default.compare(password, hash, function(err, result) {
        console.log("password:", password + "\n hashcode:", hash);
        if (err) {
          console.log("p error", err);
          reject(err.message);
        } else {
          console.log("reuslt:", result);
          result ? resolve(result) : reject("Password is incorrect");
        }
      });
    });
  }
};
//# sourceMappingURL=bycrypt.js.map
