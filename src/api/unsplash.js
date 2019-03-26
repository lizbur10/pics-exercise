import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID a0b2a14cfdefbbd70a816f9238894790d090548da5f2a9f3ed0959cb19b78d69'
    }

});