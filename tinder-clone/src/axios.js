import axios from 'axios';

const inst = axios.create({
    baseURL: 'http://localhost:3001'
});

export default inst;