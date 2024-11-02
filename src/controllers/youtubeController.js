import { google } from "googleapis";
import { YoutubeTranscript } from "youtube-transcript";
import { extractVideoId } from "../utils/videoUtils.js";
import { ApiError } from "../utils/ApiError.js";

console.log(process.env)
const youtube = google.youtube({
  version: "v3",
  auth: 'YOUTUBE_API_KEY', // enter your youtube api key :here
});

export const youtubeController = {
  async searchVideos(req, res, next) {
    try {
      const { query } = req.query;

      if (!query) {
        throw new ApiError(400, "Search query is required");
      }

      const response = await youtube.search.list({
        part: "snippet",
        q: query,
        type: "video",
        maxResults: 10,
      });

      res.json({
        success: true,
        data: response.data.items,
      });
    } catch (error) {
      next(error);
    }
  },

  async getTranscript(req, res, next) {
    try {
      const { videoUrl } = req.query;

      if (!videoUrl) {
        throw new ApiError(400, "Video URL is required");
      }

      const videoId = extractVideoId(videoUrl);

      if (!videoId) {
        throw new ApiError(400, "Invalid YouTube URL");
      }

      const transcript = await YoutubeTranscript.fetchTranscript(videoId);

      // Format transcript
      const formattedTranscript = transcript.map((item) => ({
        timestamp: item.offset,
        duration: item.duration,
        text: item.text,
      }));

      res.json({
        success: true,
        data: {
          videoId,
          transcript: formattedTranscript,
        },
      });
    } catch (error) {
      next(error);
    }
  },

  async getVideoDetails(req, res, next) {
    try {
      const { videoId } = req.params;

      const response = await youtube.videos.list({
        part: "snippet,contentDetails,statistics",
        id: videoId,
      });

      if (!response.data.items.length) {
        throw new ApiError(404, "Video not found");
      }

      res.json({
        success: true,
        data: response.data.items[0],
      });
    } catch (error) {
      next(error);
    }
  },
};