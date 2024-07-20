import mongoose from "mongoose";


global.mongoose = {
    connection: null,
    promise: null
}

export default async function dbConnect() {
    if (global.mongoose && global.mongoose.connection) {
        console.log("db connected from previous connection");
        return global.mongoose.connection;
    } else {
        const connectionString = process.env.MONGODB_URI;
        console.log("db connected from new connection", connectionString);
        const promise = mongoose.connect(connectionString, {
            autoIndex: true,
        })

        global.mongoose = {
            connection: await promise,
            promise: promise
        }

        return await promise;
    }
}