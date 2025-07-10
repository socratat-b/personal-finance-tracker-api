import { Router } from "express";

const route = Router();

route.get("/", (req, res) => {
  return res.send("Get all the expenses operations here later");
});

route.post("/", (req, res) => {
  return res.status(201).send("Create something new in this route");
});

export default route;
