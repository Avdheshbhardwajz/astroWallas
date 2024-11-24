import express from "express";
import { editSection, fetchSection , fetchData } from "../controllers/section.controller.js";

const sectionRouter = express.Router();

sectionRouter.get("/fetch-section", fetchSection);
sectionRouter.get("/fetch-data", fetchData);
sectionRouter.put("/edit-section", editSection);

export default sectionRouter;
