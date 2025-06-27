import "../css/MovieCard.css";
import { useMovieContext } from "../contexts/MovieContext";
// This component displays a movie card with the movie poster, title, release date, and a button to add the movie to favourites.
function MovieCard({movie})
{
    const { addtoFavourites, removeFromFavourites, isFavourite } = useMovieContext();
    // This function handles the click event on the favourite button.
    // It checks if the movie is already in favourites and adds or removes it accordingly.
    const fav = isFavourite(movie.id);
    // The movie object is passed as a prop to the MovieCard component.
    function onFavouriteClick(e)
    {
       e.preventDefault();
       if(fav)
       {
           removeFromFavourites(movie.id);
       }
       else
       {
           addtoFavourites(movie);
       }
    }
    return <div className = "movie-card">
        <div className = "movie-poster">
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
        <div className = "movie-overlay">
            <button className = {`favorite-btn ${isFavourite(movie.id) ? "active" : ""}`} onClick = {onFavouriteClick}>
            ❤︎
            </button>
        </div> 
        </div>
        <div className = "movie-info">
            <h3>{movie.title}</h3>
            <p>{movie.release_date?movie.release_date.split("-")[0]:""}</p>
        </div>
    </div>
}
export default MovieCard;