const API_KEY = "df23da9dd503cb5a8c8ef9c7995a7254";
const BASE_URL  = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
    const data = await response.json();
    return data.results;
};

export const searchMovies = async (query) => {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${encodeURIComponent(query)}&page=1`);
    const data = await response.json();
    return data.results;
};
//fetch is used to make HTTP requests to the API
//async/await is used to handle asynchronous operations