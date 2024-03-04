import { Router } from "express";

const userRouter = Router();

userRouter
  .get("/", (req, res) => {
    res.send("Rota de user /");
  })
  .post("/", (req, res) => {
    res.send("post de user /");
  })
  .get("/:id", (req, res) => {
    res.send("get de user /:id");
  })
  .put("/:id", (req, res) => {
    res.send("put de user /:id");
  })
  .patch("/:id", (req, res) => {
    res.send("patch de user /:id");
  })
  .delete("/:id", (req, res) => {
    res.send("delete de user /:id");
  });

export { userRouter };
