const { google } = require('googleapis');
const express = require('express');

const youtube = google.youtube('v3');

const apiKey = 'AIzaSyA5W0KWgA1sUByIRdJ7n-68rACpmb9WLjg'; // Replace with your YouTube API key
const channelId = 'UCVtFOytbRpEvzLjvqGG5gxQ'; // Replace with the specific YouTube creator's channel ID
const keyword = 'diss'; // Replace with the specific word you want to search for

const app = express();

app.get('/videos', async (req, res) => {
  try {
    const response = await youtube.search.list({
      key: apiKey,
      channelId: channelId,
      q: keyword,
      part: 'id,snippet',
      type: 'video',
      maxResults: 50,
      videoCaption: 'any',
      fields: 'items(id(videoId),snippet(title,thumbnails))',
    });

    res.send(response.data.items);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching videos');
  }
});

const port = 3000;
const server = app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Keep the server running indefinitely
setInterval(() => {
  // Empty function to prevent the program from exiting
}, 1000);
