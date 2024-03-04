import { Router } from "express";
const postRouter = Router();

postRouter.get("/", (req, res) => {
  res.send("Rota de post");
});

export { postRouter };
