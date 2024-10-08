import { Router } from "express";
import infoController from "../controller/info.controller.js";
const infoRouter = Router();

infoRouter.post("/create-info", infoController.createInfo);
infoRouter.get("/get-info", infoController.getInfo);
infoRouter.put("/update-info", infoController.updateInfo);
infoRouter.delete("/delete-info", infoController.deleteInfo);
export default infoRouter;
