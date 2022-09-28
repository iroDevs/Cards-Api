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
        mongoose.connect(`mongodb://localhost:27017/CardDB`)
    }

    private routes (): void {
      this.express.use(routes)
    }
}

export default new App().express