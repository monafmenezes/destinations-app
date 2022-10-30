import axios from 'axios';

export default axios.create({
    baseURL: `https://api.pexels.com`,
    headers: {
        Authorization: '563492ad6f91700001000001a840c37df18e46dc84e8ec72db69716e'
    }
});