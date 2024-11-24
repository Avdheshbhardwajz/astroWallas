import express from "express";
import { editSection, fetchSection } from "../controllers/section.controller.js";

const sectionRouter = express.Router();

sectionRouter.get("/fetch-section", fetchSection);
sectionRouter.put("/edit-section", editSection);

export default sectionRouter;
