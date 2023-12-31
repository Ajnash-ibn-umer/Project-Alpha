import dotenv from 'dotenv';

dotenv.config();

export const PORT=process.env.PORT 
export const DB=process.env.DB  as string
export const SALTROUND=process.env.SALTROUND as string
export const JWT_SECRET=process.env.JWT_SECRET as string