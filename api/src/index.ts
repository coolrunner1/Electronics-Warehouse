import express, { Application } from 'express';
import cors from "cors"
import router from "./routes/router";
import * as path from "node:path";
import prisma from "../prisma/prisma-client";

const app: Application = express();

app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));
app.use("/", router);
app.use(express.static(path.join(__dirname, 'public')));

const start = async () => {
    app.listen(8000, () => console.log("Server started"));
}



start();