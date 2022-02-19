import * as Mongoose from "mongoose";
require('dotenv').config()

let database: Mongoose.Connection;

export const connect = () => {

    const url = process.env.MONGO_CONNECTION_STRING;
    console.log("from connect: process.env.MONGO_CONNECTION_STRING :::",process.env.MONGO_CONNECTION_STRING)

    if (database) {
        return;
    }
    
    Mongoose.connect(url, {
        useNewUrlParser: true,
        useFindAndModify: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    });
    
    database = Mongoose.connection;

    database.once("open", async () => {
        console.log("Connected to database");
    });
      
    database.on("error", () => {
        console.log("Error connecting to database");
    });

};

export const disconnect = () => {
    
    if (!database) {
      return;
    }
    
    Mongoose.disconnect();

    database.once("close", async () => {
        console.log("Diconnected  to database");
    });

};