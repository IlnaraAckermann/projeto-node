import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import "dotenv/config";
import { indexRoute } from "./routes/indexRouter";
import AppError from "src/app/errors/AppError";
import { PrismaClient } from "@prisma/client";

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());
app.use("/", indexRoute);

// middleware para capturar erros
app.use((error: Error, _req: Request, res: Response, _next: NextFunction) => {
  if (error instanceof AppError) {
    return res.status(error.statusCode).json({
      status: "error",
      message: error.message,
    });
  }
  return res.status(500).json({
    status: "error",
    message: "Internal server error",
  });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}/`);
});
