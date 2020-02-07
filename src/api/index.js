import axios from 'axios';
const KEY = 'AIzaSyCaZrWZ2wA1Vl4cWMHf0OamsawZoKi0pNo';
export const params = {part: 'snippet',
key: KEY,
maxResults: 5}
export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
});