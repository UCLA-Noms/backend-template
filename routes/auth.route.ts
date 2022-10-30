import express from "express";
import controller from "./../controller/auth.controller";
const router = express.Router();

// Courses has getAll, getSingle, and getEligible options.
router.get("/authType", controller.doThing);

export default router;
