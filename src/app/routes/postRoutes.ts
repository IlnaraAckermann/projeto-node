import { postController } from "@modules/post/factory/PostFactory";
import { Router } from "express";
const postRouter = Router();

postRouter
  .get("/", postController.getAll.bind(postController))
  .get("/author/:id", postController.getAllByUserID.bind(postController))
  .post("/", postController.post.bind(postController))
  .get("/:id", postController.getById.bind(postController))
  .put("/:id", postController.update.bind(postController))
  .delete("/:id", postController.delete.bind(postController));

export { postRouter };
