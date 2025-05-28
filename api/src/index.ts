import express from "express";
import cors from "cors"
import router from "./routes/router";
import * as path from "node:path";

const app = express();

app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173"
}));
app.use("/", router);
app.use(express.static(path.join(__dirname, 'public')));

const start = async () => {
    app.listen(8000, () => console.log("Server started"));
}

start();