// import { userLoginParams, userRegisterParams } from "../types";


import joi from 'joi'
import { userLoginParams, userRegisterParams } from 'src/types'


export default {

    userRegister: (data: userRegisterParams) => {
        return new Promise<any>(async (resolve, reject) => {
            console.log('validation d',data);
            
            const schema = joi.object({
                fullName: joi.string().min(3).max(30),
                email: joi.string().min(3).max(30).email().required(),
                username: joi.string().min(3).max(30).required().pattern(new RegExp('^[a-zA-Z0-9.-]{1,30}$')).messages({
                    'string.min': 'Username should have at least 3 characters',
                    'string.max': 'Username should not have more than 30 characters',
                    'string.pattern.base': 'Username should only have alphanumeric characters, dots and hyphens '
                }),
                password: joi.string().min(8).required(),
                confirmPassword: joi.ref('password'),
               
            })
            const { error } =  schema.validate(data)
            if (error) {
                console.log('error in validation');

                reject(error.details[0].message)
            } else {
                resolve(true)

            }
        })

    },
    userLogin: (data: userLoginParams) => {
        return new Promise<any>(async (resolve, reject) => {
            const schema = joi.object({

                email: joi.string().min(3).max(30).email().required(),
                password: joi.string().min(8).required(),


            })
            const { error } = await schema.validate(data)
            if (error) {
                reject(error.details[0].message)
            } else {
                resolve(true)

            }
        })

    }


}