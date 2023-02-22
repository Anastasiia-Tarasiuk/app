const BASE_URL = 'https://api.themoviedb.org/3/';
const IMAGE_URL = `https://image.tmdb.org/t/p/w300`;
const API_KEY = 'b19e6b2986fc1ae4c290daa4cefec337';
const SEARCH_URL = `${BASE_URL}search/movie`;

export { BASE_URL, IMAGE_URL, API_KEY, SEARCH_URL };

export const VIDEO_MODAL_SIZE = {
    "320": { width: '300px', height: '300px' },
    "768": { width: '700px', height: '500px' },
    "1024": {width: '1000px', height: '750px'},
}

export const MODAL_SIZE = {
    "320": { width: '300px', height: '200px' },
    "768": { width: '600px', height: '400px' },
}