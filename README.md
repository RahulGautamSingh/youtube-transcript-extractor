To use this project locally, follow these steps:

## Requirements

1. API key from Google Cloud Console

Watch [this video](https://www.youtube.com/watch?v=uz7dY8qTFJw&t=22s) to know how you can get one for yourself.

## Steps:

1. Clone this repository. Refer the docs [here]([url](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository))
2. Open the repository using VSCode or simialr IDE
3. Add the API key you generated above in the `src/controllers/youtubeController.js` file on, line 9
4. Open command-line and run the command `npm install` then `npm run dev`

Now your api is up and running on `localhost:3000`

## Test

Go you your browser and use these urls:

1. Search for videos
```
http://localhost:3000/api/youtube/search?query=javascript tutorial
```

2. Get transcript
```
http://localhost:3000/api/youtube/transcript?videoUrl=https://www.youtube.com/watch?v=dQw4w9WgXcQ
```

3. Get video details
```
http://localhost:3000/api/youtube/video/dQw4w9WgXcQ
```
