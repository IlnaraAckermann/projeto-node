import express from "express";
import "dotenv/config";
// import { PrismaClient } from "@prisma/client";
import { indexRoute } from "./routes/indexRouter";

const app = express();
// const prisma = new PrismaClient();

app.use(express.json());

app.use("/", indexRoute);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}/`);
});
  