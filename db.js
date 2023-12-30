import dotenv from "dotenv";
import { MongoClient } from "mongodb";
dotenv.config();
const mongoStr = process.env.MONGO_URI;

async function dbConnection(){
    let client = new MongoClient(mongoStr);
    await client.connect();
    console.log("DB connnected");
    return client;
}
export const client = await dbConnection();