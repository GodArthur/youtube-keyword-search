const {google} = require('googleapis');
const youtube = google.youtube('v3');

const apiKey = 'YOUR_API_KEY'; // Replace with your YouTube API key
const channelId = 'CHANNEL_ID'; // Replace with the specific YouTube creator's channel ID
const keyword = 'KEYWORD'; // Replace with the specific word you want to search for

app.get('/videos', async (req, res) => {
    try {
        const response = await youtube.search.list({
            key: apiKey,
            channelId: channelId,
            q: keyword,
            part: 'id,snippet',
            type: 'video',
            maxResults: 50,
            videoCaption: 'closedCaption',
            fields: 'items(id(videoId),snippet(title))',
        });

        res.send(response.data.items);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching videos');
    }
});
