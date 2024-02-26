import express from "express";
import "dotenv/config";

const app = express();

app.get("/", (req, res) => {
    res.status(200).send("oi");
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}/`);
});
// sdsds
