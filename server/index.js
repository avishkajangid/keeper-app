import express from 'express';
import bodyParser from 'body-parser';
import dotenv from "dotenv";
import cors from 'cors';

import Connection from './database/db.js';
import Routes from "./server/route.js";

const app = express();

dotenv.config();

app.use(bodyParser.json({extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.options('/localhost:8000', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '/'); // Replace * with the allowed origin
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE'); // List of allowed methods
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // List of allowed headers
  res.status(204).send();
});

app.use("/", Routes);

app.get("/", (req, res) => {
  res.send("Go to /all page to fetch api");
});

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

Connection(username, password);

const port = 8000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});