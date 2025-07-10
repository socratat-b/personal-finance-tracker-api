import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  return res.send("Get all the expenses operations here later");
});

router.post("/", (req, res) => {
  return res.status(201).send("Create something new in this router");
});

export default router;
