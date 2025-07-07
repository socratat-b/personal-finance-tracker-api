import { Router } from "express";

const router = Router();

router.get("/expenses", (req, res) => {
  res.send("This is the route of all lorems ");
});

export default router;
