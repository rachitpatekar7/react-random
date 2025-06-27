import MovieCard from '../components/MovieCard'
import { useState } from 'react'
import "../css/Home.css";
// Importing the MovieCard component to display individual movie cards
function Home()
{
    const[searchQuery, setSearchQuery] = useState("");
    // State to hold the search query
    const movies = [
        {id : 1, title: "Sivaji The Boss", release_date: "2002", url: "https://example.com/movie-poster.jpg"},
        {id : 2, title: "Gabbar is Back", release_date: "2017", url: "https://example.com/movie-poster.jpg"},
        {id : 3, title: "I KNOW SOME Ns in NEW YORK", release_date: "2010", url: "https://example.com/movie-poster.jpg"}
    ]

    const handleSearch = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior (refreshing the page)
        // This function will be called when the search form is submitted
        // You can use the searchQuery state to filter or search for movies
        alert(searchQuery)
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
        <div className = "movies-grid">
             
            {movies.map(movie => (
              //  movie.title.toLowerCase().includes(searchQuery.toLowerCase()) && // Filter movies based on search query (we using an API so not needed)
                <MovieCard key={movie.id} movie={movie} />
            ))} 
        </div>
    </div>
}
//when a state change occurs, the component re-renders
//useState is a React hook that allows you to add state to functional components
//.map is like an array map function, but for React components
export default Home;