"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var userRouters_exports = {};
__export(userRouters_exports, {
  default: () => userRouters_default
});
module.exports = __toCommonJS(userRouters_exports);
var import_express = require("express");
var import_userController = require("../controllers/userController");
const userRouter = (0, import_express.Router)();
userRouter.post("/signup", import_userController.signup);
userRouter.post("/login", import_userController.login);
var userRouters_default = userRouter;
//# sourceMappingURL=userRouters.js.map
