import { Router } from "express";
let router = Router();
router.get("/", (req, res) => {
  res.send({
    code: 200,
    data: "你好钉钉"
  })
})

export default router;