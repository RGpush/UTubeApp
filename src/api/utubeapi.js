import axios from 'axios';

const KEY = 'AIzaSyBUYqKUnQ2cSsRa0sapBHK98WKmj9hJn6I';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }

})
