export const swaggerDocs = {
    openapi: "3.0.0",
    info: {
      title: "YouTube Transcript API",
      version: "1.0.0",
      description: "API for searching YouTube videos and extracting transcripts",
    },
    servers: [
      {
        url: "http://localhost:3000",
        description: "Development server",
      },
    ],
    paths: {
      "/api/youtube/search": {
        get: {
          summary: "Search YouTube videos",
          parameters: [
            {
              in: "query",
              name: "query",
              required: true,
              schema: {
                type: "string",
              },
              description: "Search query",
            },
          ],
          responses: {
            200: {
              description: "Successful response",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      success: {
                        type: "boolean",
                      },
                      data: {
                        type: "array",
                        items: {
                          type: "object",
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
      "/api/youtube/transcript": {
        get: {
          summary: "Get video transcript",
          parameters: [
            {
              in: "query",
              name: "videoUrl",
              required: true,
              schema: {
                type: "string",
              },
              description: "YouTube video URL",
            },
          ],
          responses: {
            200: {
              description: "Successful response",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      success: {
                        type: "boolean",
                      },
                      data: {
                        type: "object",
                        properties: {
                          videoId: {
                            type: "string",
                          },
                          transcript: {
                            type: "array",
                            items: {
                              type: "object",
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  };
  