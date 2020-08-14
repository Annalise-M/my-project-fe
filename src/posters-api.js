import request from 'superagent';

const URL = process.env.REACT_APP_API_URL || 'https://hidden-lake-26631.herokuapp.com';

export function fetchPosters() {
    return request.get(`${URL}/posters`);
}
// const id = 1; 

export function fetchPoster(id) {
    return request.get(`${URL}/posters/:${id}`);
}

export function createPoster(posterData) {
    return request.post(`${URL}/posters`, posterData)
}


