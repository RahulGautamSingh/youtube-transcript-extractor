import express from "express";
import { youtubeController } from "../controllers/youtubeController.js";

export const youtubeRouter = express.Router();

youtubeRouter.get("/search", youtubeController.searchVideos);
youtubeRouter.get("/transcript", youtubeController.getTranscript);
youtubeRouter.get("/video/:videoId", youtubeController.getVideoDetails);