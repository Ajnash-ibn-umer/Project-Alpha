import bcrypt from 'bcrypt'

//local modules
import { SALTROUND } from '../config/variables'

export default {

    bcryptData: (data: string) => {
        return new Promise(async (resolve, reject) => {
            console.log("password:", data);
            console.log("salt:", SALTROUND);
            try {
                const hash: string = await bcrypt.hash(data, parseInt(SALTROUND))
                console.log(typeof (hash));

                resolve(hash)

            } catch (error) {
                reject({
                    error
                })
            }

        })


    },

    bcryptCompare: (password: string, hash: string) => {
        return new Promise((resolve, reject) => {
            bcrypt.compare(password, hash, function (err, result) {
                console.log('password:', password + '\n hashcode:', hash);

                if (err) {
                    console.log('p error', err);

                    reject(err.message)
                } else {
                    console.log('reuslt:', result);
                    result ? resolve(result as boolean) :reject('Password is incorrect')
                }


            });
        })


    }


}
