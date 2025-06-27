import MovieCard from '../components/MovieCard'
import { useState, useEffect } from 'react'
import "../css/Home.css";
import { searchMovies, getPopularMovies } from '../services/api';
// Importing the MovieCard component to display individual movie cards
function Home()
{
    const[searchQuery, setSearchQuery] = useState("");
    // State to hold the search query
   /* const movies = [
        {id : 1, title: "Sivaji The Boss", release_date: "2002", url: "https://example.com/movie-poster.jpg"},
        {id : 2, title: "Gabbar is Back", release_date: "2017", url: "https://example.com/movie-poster.jpg"},
        {id : 3, title: "I KNOW SOME Ns in NEW YORK", release_date: "2010", url: "https://example.com/movie-poster.jpg"}
    ]*/ //we using api so not using

    //const movies = getPopularMovies(); // Fetching popular movies from the API
    // This will be an array of movie objects fetched from the API
    // But this will be called every time the component renders, which is not ideal
    // We should use useEffect to fetch the movies only once when the component mounts
// useEffect  is a React hook that allows you to perform side effects in functional components
    // It is used to handle operations like data fetching, subscriptions, or manually changing the DOM

    const[movies, setMovies] = useState([]); // State to hold the list of movies
    // Initializing movies state as an empty array
    const[error, setError] = useState(null); // State to hold any error that occurs during fetching
    const[loading, setLoading] = useState(true); // State to indicate loading status    
    // Initializing loading state as true to show a loading indicator while fetching data
    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                // Fetch popular movies from the API
                const popularMovies = await getPopularMovies();
                setMovies(popularMovies);
            } catch (error) {
                console.error("Error fetching popular movies:", error);
                setError("failed to fetch popular movies. Please try again later.");
                // If an error occurs, set the error state to display an error message
            }
            finally{
               setLoading(false) // This block will always run after try/catch
            }
        };
        loadPopularMovies();
    },[]); // Empty dependency array means this effect runs only once when the component mounts


    const handleSearch = async (e) => {
        e.preventDefault(); // Prevent the default form submission behavior (refreshing the page)
        // This function will be called when the search form is submitted
        // You can use the searchQuery state to filter or search for movies
        
        if(!searchQuery.trim()) return
            if(loading)return // If already loading, do not initiate another search
        // If the search query is empty or only contains whitespace, do nothing
            setLoading(true)
            try {
                const searchResults = await searchMovies(searchQuery) // Call the searchMovies function with the search query
                setMovies(searchResults)
                setError(null) // Update the movies state with the search results
            }
        
            catch(error) {
                console.error("Error searching movies:", error);
                setError("Failed to fetch search results. Please try again later.");
            }
            finally {
                    setLoading(false); // Set loading to false after the search is complete
                 } 
        setSearchQuery(""); // Reset the search query to an empty string
        //setSearchQuery("--------") sets the search query to a new value
        // Handle search logic here
    }
    return <div className = "home">
        <form onSubmit={handleSearch} classname = "search-form">
            <input type="text" 
            placeholder="Search for a movie..." 
            className = "search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className = "search-button">Search</button>
            </form>

            {error && <div className="error-message">{error}</div>}

            {loading? (<div className = "loading">Loading...</div>) 
            :
            ( 
            <div className = "movies-grid">
             
            {movies.map(movie => (
              //  movie.title.toLowerCase().includes(searchQuery.toLowerCase()) && // Filter movies based on search query (we using an API so not needed)
                <MovieCard key={movie.id} movie={movie} />
            ))} 
        </div>
        )}
    </div>
        
}
//when a state change occurs, the component re-renders
//useState is a React hook that allows you to add state to functional components
//.map is like an array map function, but for React components
//https://www.themoviedb.org/ database for movies
export default Home;