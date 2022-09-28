import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import * as dotenv from 'dotenv'

class App {
    public express: express.Application 

    public constructor() {
        dotenv.config()
        this.express = express()
        
        this.middleware()
        this.database()
        this.routes()
        
}
    private middleware (): void {
        this.express.use(express.json())
        this.express.use(cors())
        
    }

    private database (): void {
        mongoose.connect(`mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@localhost:27017/CardDB`)
    }

    private routes (): void {
        this.express.get('/', (req, res) => {
            return res.send("Hello World");
        });
    }
}

export default new App().express