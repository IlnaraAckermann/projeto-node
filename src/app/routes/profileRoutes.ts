import { Router } from "express";

const profileRouter = Router();

profileRouter.get("/", (req, res) => {
  res.send("Rota de profile");
});

export { profileRouter };
