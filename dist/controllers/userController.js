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
var userController_exports = {};
__export(userController_exports, {
  login: () => login,
  signup: () => signup
});
module.exports = __toCommonJS(userController_exports);
var import_joiValidation = __toESM(require("../services/joiValidation"));
var import_bycrypt = __toESM(require("../services/bycrypt"));
var import_user = require("../models/user");
var import_jwtAuth = require("../services/jwtAuth");
const signup = async (req, res) => {
  try {
    const data = req.body;
    console.log({ data });
    const validationResult = await import_joiValidation.default.userRegister(data);
    console.log({ validationResult });
    const hashedPassword = await import_bycrypt.default.bcryptData(data.password);
    console.log({ hashedPassword });
    const addedUser = new import_user.userSchema({
      email: data.email,
      fullName: data.fullName,
      username: data.username.toLowerCase(),
      password: hashedPassword,
      joined: Date.now().toString()
    });
    console.log({ addedUser });
    await addedUser.save();
    return res.json({
      success: true,
      msg: "registration successfull"
    });
  } catch (error) {
    const message = error.message ?? error;
    return res.json({
      success: false,
      msg: message
    });
  }
};
const login = async (req, res) => {
  try {
    const data = req.body;
    console.log({ data });
    const validationResult = await import_joiValidation.default.userLogin(data);
    console.log({ validationResult });
    const user = await import_user.userSchema.findOne({ $and: [{ email: data.email }] }).lean();
    if (!user)
      throw "User not found";
    const hashedPassword = await import_bycrypt.default.bcryptCompare(data.password, user.password);
    console.log({ hashedPassword });
    if (!hashedPassword)
      throw "Authentication incorrect";
    const tokenData = {
      email: user.email,
      uid: user._id,
      name: user.username
    };
    const token = await (0, import_jwtAuth.jwtsigning)(tokenData, "10d");
    return res.json({
      success: true,
      msg: "login successfull",
      token
    });
  } catch (error) {
    const message = error.message ?? error;
    return res.json({
      success: false,
      msg: message
    });
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  login,
  signup
});
//# sourceMappingURL=userController.js.map
