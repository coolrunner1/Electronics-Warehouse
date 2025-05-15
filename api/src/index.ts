const express = require("express");
const cors = require("cors");
const router = require("./router/router");

const app = express();

app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173"
}));
app.use("/", router);

const start = async () => {
    app.listen(8000, () => console.log("Server started"));
}

start();
