import {express} from 'express';
import {cors} from 'cors';
import axios from 'axios';
import { configDotenv, config } from 'dotenv';
import {pg} from 'pg';

const app= express();
app.use(cors());
app.use(res.json());

app.config();

const db= new pg.Client({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT || 3000,
    database: process.env.YOUR_DB,
});

app.listen('/' , (req, res)=>
{
    console.log(`Server is running on port ${port}`);
})

