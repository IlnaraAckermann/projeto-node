import { Router } from "express";
import { postRouter } from "./postRoutes";
import { userRouter } from "./userRoutes";
import { profileRouter } from "./profileRoutes";

const indexRoute = Router();

indexRoute.get("/", (req, res) => {
  res.send("Rota basica");
});
indexRoute.use("/posts", postRouter);
indexRoute.use("/users", userRouter);
indexRoute.use("/profiles", profileRouter);
export { indexRoute };
