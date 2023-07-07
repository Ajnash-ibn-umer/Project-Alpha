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
var joiValidation_exports = {};
__export(joiValidation_exports, {
  default: () => joiValidation_default
});
module.exports = __toCommonJS(joiValidation_exports);
var import_joi = __toESM(require("joi"));
var joiValidation_default = {
  userRegister: (data) => {
    return new Promise(async (resolve, reject) => {
      console.log("validation d", data);
      const schema = import_joi.default.object({
        fullName: import_joi.default.string().min(3).max(30),
        email: import_joi.default.string().min(3).max(30).email().required(),
        username: import_joi.default.string().min(3).max(30).required().pattern(new RegExp("^[a-zA-Z0-9.-]{1,30}$")).messages({
          "string.min": "Username should have at least 3 characters",
          "string.max": "Username should not have more than 30 characters",
          "string.pattern.base": "Username should only have alphanumeric characters, dots and hyphens "
        }),
        password: import_joi.default.string().min(8).required(),
        confirmPassword: import_joi.default.ref("password")
      });
      const { error } = schema.validate(data);
      if (error) {
        console.log("error in validation");
        reject(error.details[0].message);
      } else {
        resolve(true);
      }
    });
  },
  userLogin: (data) => {
    return new Promise(async (resolve, reject) => {
      const schema = import_joi.default.object({
        email: import_joi.default.string().min(3).max(30).email().required(),
        password: import_joi.default.string().min(8).required()
      });
      const { error } = await schema.validate(data);
      if (error) {
        reject(error.details[0].message);
      } else {
        resolve(true);
      }
    });
  }
};
//# sourceMappingURL=joiValidation.js.map
