import { userController } from "@modules/user/factory/userFactory";
import { Router } from "express";

const userRouter = Router();

userRouter
  .get("/", userController.getAll.bind(userController))
  .post("/", userController.post.bind(userController))
  .get("/:id", userController.getById.bind(userController))
  .put("/:id", userController.update.bind(userController))
  .delete("/:id", userController.delete.bind(userController));

export { userRouter };
