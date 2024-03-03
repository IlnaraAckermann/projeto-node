
import { postRouter } from "./postRoutes";
import { Router } from "express";

const indexRoute = Router();

indexRoute.get("/",(req, res)=>{
  res.send("Rota basica");
});

indexRoute.use("/post", postRouter);
export {indexRoute};

