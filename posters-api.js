import request from 'superagent';

const URL = process.env.REACT_APP_API_URL;

export function fetchPosters() {
    return request.get(`${URL}/posters`);
}

export function fetchPoster() {
    return request.get(`${URL}/posters/${id}`);
}

export function createPoster(posterData) {
    return request.post(`${URL}/posters`, posterData)
}


