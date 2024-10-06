import { Router } from "express";
import authRouter from "./auth.router.js";
import infoRouter from "./info.router.js";
import authorizationToken from "../middleware/auth.mdw.js";
const router = Router();

router.use("/auth", authRouter);
router.use("/info", authorizationToken, infoRouter);
export default router;
