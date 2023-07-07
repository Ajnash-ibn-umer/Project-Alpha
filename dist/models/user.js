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
var user_exports = {};
__export(user_exports, {
  userSchema: () => userSchema
});
module.exports = __toCommonJS(user_exports);
var import_mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");
const user = new import_mongoose.Schema({
  // personal information
  fullName: { type: String, required: true, minlength: 3, maxlength: 30 },
  // @ts-ignore
  username: { type: String, index: true, unique: [true, "This user already exist"], sparse: true, required: true, minlength: 3, maxlength: 30 },
  profileImg: { type: String },
  // @ts-ignore
  email: { type: String, unique: [true, "This user already exist"], index: true, required: true },
  password: { type: String, required: true, minlength: 8 },
  mobile: { type: String, index: true, unique: true, sparse: true },
  joined: { type: Date, default: Date.now() }
});
const userSchema = (0, import_mongoose.model)("user", user);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  userSchema
});
//# sourceMappingURL=user.js.map
