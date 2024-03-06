import { Router } from "express";
const postRouter = Router();

postRouter
  .get("/", (req, res) => {
    res.send("Rota de post /");
  })
  .post("/", (req, res) => {
    res.send("post de post /");
  })
  .get("/:id", (req, res) => {
    res.send("get de post /:id");
  })
  .put("/:id", (req, res) => {
    res.send("put de post /:id");
  })
  .patch("/:id", (req, res) => {
    res.send("patch de post /:id");
  })
  .delete("/:id", (req, res) => {
    res.send("delete de post /:id");
  });

export { postRouter };
