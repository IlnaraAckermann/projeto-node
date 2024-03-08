import { Router } from "express";
import { postRouter } from "./postRoutes";
import { userRouter } from "./userRoutes";
import { profileRouter } from "./profileRoutes";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "@swagger/swagger.json";

const indexRoute = Router();

indexRoute.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
indexRoute.use("/posts", postRouter);
indexRoute.use("/users", userRouter);
indexRoute.use("/profiles", profileRouter);
export { indexRoute };
