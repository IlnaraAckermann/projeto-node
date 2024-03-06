import express from "express";
import cors from "cors";
import "dotenv/config";
import { indexRoute } from "./app/routes/indexRouter";
import { errorHandlerMiddleware } from "@middlewares/index";

const app = express();

app.use([cors(), express.json()]);
app.use("/", indexRoute);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}/`);
});
