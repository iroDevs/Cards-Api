import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import * as dotenv from 'dotenv'

class App {
    public expres: express.Application 

    public constructor() {
        dotenv.config()
        this.expres = express()
        this.expres.use(express.json())
        this.expres.use(cors())
}
    private middleware (): void {
        console.log("entrou no middleware");
        
    }

    private database (): void {
        mongoose.connect(`mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@localhost:27017/CardDB`)
    }

    private routes (): void {
        this.expres.get('/', (req, res) => {
            return res.send("Hello World");
        });
    }
}

export default new App().expres