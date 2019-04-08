import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://goalcoach-44e53.firebaseio.com/'
});

export default instance;