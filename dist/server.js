import app from './app'
import * as dotenv from 'dotenv'

dotenv.config()

const PORT = process.env.NODE_PORT || '3999';

app.listen(PORT);
