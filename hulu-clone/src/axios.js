/* Request from an Endpoint, and then do something with the response */
import axios from 'axios';

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
});

export default instance;