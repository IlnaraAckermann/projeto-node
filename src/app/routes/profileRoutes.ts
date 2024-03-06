import { profilerController } from "@modules/profile/factory/ProfileFactory";
import { Router } from "express";

const profileRouter = Router();

profileRouter
  .get("/", profilerController.getAll.bind(profilerController))
  .post("/", profilerController.post.bind(profilerController))
  .get("/:id", profilerController.getById.bind(profilerController))
  .put("/:id", profilerController.update.bind(profilerController))
  .delete("/:id", profilerController.delete.bind(profilerController));

export { profileRouter };
