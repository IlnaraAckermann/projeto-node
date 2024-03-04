import { Router } from "express";

const profileRouter = Router();

profileRouter
  .get("/", (req, res) => {
    res.send("Rota de profile /");
  })
  .post("/", (req, res) => {
    res.send("post de profile /");
  })
  .get("/:id", (req, res) => {
    res.send("get de profile /:id");
  })
  .put("/:id", (req, res) => {
    res.send("put de profile /:id");
  })
  .patch("/:id", (req, res) => {
    res.send("patch de profile /:id");
  })
  .delete("/:id", (req, res) => {
    res.send("delete de profile /:id");
  });

export { profileRouter };
