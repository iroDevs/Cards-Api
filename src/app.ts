/* eslint-disable @typescript-eslint/no-var-requires */
import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import * as dotenv from 'dotenv'
import routes from './Routes/CardRoute'

class App {
    public express: express.Application 

    public constructor() {
        dotenv.config()


        console.log(`usuario: ${process.env.MONGO_USER} senha: ${process.env.MONGO_PASSWORD}`);
        
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
        mongoose.connect(`mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@localhost:27017`)
        
        //mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=writeapp&w=1
        //mongodb://${process.env.MONGO_USER}:{process.env.MONGO_PASSWORD}@localhost:27017/CardDB
        //mongodb://iroDev:flamengo123@localhost:27017/
    }

    private routes (): void {
      this.express.use(routes)
    }
}

export default new App().express