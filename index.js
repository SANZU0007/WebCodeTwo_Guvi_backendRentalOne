import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { client } from "./db.js";
import multer from "multer";
import bodyParser from "body-parser";
import imagesRouter from "./uploadImages.js";
import userRouter from "./constollers/userControl.js";
import { isAuth } from "./auth.js";
dotenv.config()


let app = express();
app.use(cors());
app.use(express.json());

app.use("/", imagesRouter);
app.use("/", userRouter);

const insertnewdata = async()=>{
 let   data =    {
       
        "bookedStatus": false,
        "condition": "good",
        "endDate": "",
        "fuelType": " current ",
        "mileage": " full charged one day perferred",
        "name": " Camara Stand",
        "price": 0,
        "rate": 700,
        "startDate": "",
        "weight": "4100 kg",
        "priceType": "per day",
        "link": "https://www.jiomart.com/images/product/original/rvmlbw7g9f/eloies-aluminium-brown-tripod-product-images-orvmlbw7g9f-p593564435-0-202208301549.jpg?im=Resize=(420,420)",
        "bookedDays": 0,
        "bookedUserId": ""
      }
      client.db("rental-app").collection("images").insertOne(data)

}
//  insertnewdata();

const port = process.env.PORT || 7000;


app.listen(port, ()=>console.log("server ready",port));

