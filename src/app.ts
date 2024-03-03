import express from "express";
import cors from "cors";
import "dotenv/config";
// import { PrismaClient } from "@prisma/client";
import { indexRoute } from "./shared/http/routes/indexRouter";

const app = express();
// const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());
app.use("/", indexRoute);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}/`);
});
