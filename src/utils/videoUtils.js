export const extractVideoId = (url) => {
    try {
      const urlObj = new URL(url);
      let videoId = "";
  
      if (urlObj.hostname === "youtu.be") {
        videoId = urlObj.pathname.slice(1);
      } else if (urlObj.hostname.includes("youtube.com")) {
        videoId = urlObj.searchParams.get("v");
      }
  
      if (!videoId) {
        return null;
      }
  
      return videoId;
    } catch (error) {
      return null;
    }
  };