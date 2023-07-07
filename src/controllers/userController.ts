import { Request, Response } from "express";
import joi from '../services/joiValidation'
import { userRegisterParams } from "src/types";
import bycrypt from "../services/bycrypt";
import { userSchema } from "../models/user";
import { addAbortSignal } from "stream";
import { jwtsigning } from "../services/jwtAuth";

export const signup = async (req: Request, res: Response) => {
    try {
        const data: userRegisterParams = req.body
        console.log({ data });

        // validate forms
        const validationResult: boolean = await joi.userRegister(data)
        console.log({ validationResult });


        // encrypt password
        const hashedPassword = await bycrypt.bcryptData(data.password)
        console.log({ hashedPassword });

        // check user exist in database



        const addedUser = new userSchema({
            email: data.email,
            fullName: data.fullName,
            username: data.username.toLowerCase(),
            password: hashedPassword as string,
            joined: Date.now().toString(),

        })
        console.log({ addedUser });

        await addedUser.save()

        return res.json({
            success: true,
            msg: "registration successfull"
        })
    } catch (error: any) {
        const message = error.message ?? error as string
        return res.json({
            success: false,
            msg: message
        })
    }


}

export const login = async (req: Request, res: Response) => {
    try {
        const data: userRegisterParams = req.body
        console.log({ data });

        // validate forms
        const validationResult: boolean = await joi.userLogin(data)
        console.log({ validationResult });


        // encrypt password
        const user = await userSchema.findOne({ $and: [{ email: data.email }] }).lean()
        if (!user) throw ("User not found")
        const hashedPassword = await bycrypt.bcryptCompare(data.password, user.password)
        console.log({ hashedPassword });
        if (!hashedPassword) throw ("Authentication incorrect")

        const tokenData = {
            email: user.email,
            uid: user._id,
            name: user.username,
        }
        const token = await jwtsigning(tokenData, '10d')
        return res.json({
            success: true,
            msg: "login successfull",
            token

        })
    } catch (error: any) {
        const message = error.message ?? error as string
        return res.json({
            success: false,
            msg: message
        })
    }


}