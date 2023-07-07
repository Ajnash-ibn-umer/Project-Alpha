import jwt from 'jsonwebtoken'
import { JWT_SECRET } from '../config/variables'

export const jwtsigning = (data: unknown, time?: string) => {
    return new Promise((resolve, reject) => {
        console.log('key:', JWT_SECRET);

        jwt.sign({
            data: data,
        }, JWT_SECRET, { expiresIn: time || "3d" }, (err:any, decoded:any) => {
            if (err) {
                console.error(err);

            } else {
                const token = decoded
                console.log('decoded', decoded);
                resolve(token)
            }
        })

    })

}
export const jwtverifyToken = ((token: string) => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, JWT_SECRET, (err, value:any) => {
            
            if (err) {
                console.log('error @ jwt',err.message);
                reject(err)
            } else {
                resolve(value)
            }
        });

    })
})
// export const verifyLogin = (req, res, next) => {
//     const token = req.headers.token;
//     console.log("tk", token);
//     jwt.verify(token, JWT_SECRET, (err, value) => {
//       if (err) {
//         console.log(err.message);
//         res.status(401).send(err.message);
//       } else {
//         console.log(value.data);
//         next();
//       }
//     });
//   };