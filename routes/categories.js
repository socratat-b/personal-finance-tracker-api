import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  return res.status(200).send("Get all the categories"); // GET / - grab all the categories
});

export default router;
