import request from 'superagent';

const URL = process.env.REACT_APP_API_URL || 'https://hidden-lake-26631.herokuapp.com';

export function fetchPosters() {
    try{
        return request.get(`${URL}/posters`);
    } catch(e) {
        return { error: e.message }
    }
}


// this is my fetch"Brands" function => categories_year
export function fetchCategories() {
    try{
        return request.get(`${URL}/categories`);
    } catch(e) {
        return { error: e.message }
    }
}


export function fetchPoster(id) {
    return request.get(`${URL}/posters/${id}`);
}


export function deletePoster(id) {
    return request.delete(`${URL}/posters/${id}`);
}


export function updatePoster(id, updatedPoster) {
    console.log(id, 'wazzzzzupppppppppp');
    return request.put(`${URL}/posters/${id}`, updatedPoster);
}


export function createPoster(posterData) {
    return request.post(`${URL}/posters`, posterData)
}

