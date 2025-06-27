import "../css/Favorites.css";
import { useMovieContext } from "../contexts/MovieContext";
// This component displays a message when there are no favorite movies.

function Favorite() {
    const { favourites } = useMovieContext();

    // This component uses the MovieContext to access the list of favorite movies.
    if (favourites.length === 0) {    
    return (
        <div className="favourites-empty">
            <h1>No Favourite Movies Yet.</h1>
            <p>Start adding movies to your favorites and they will appear here</p>
        </div>
    );
}
else {
    return (
        <div className="favourites-list">
            <h1>Your Favourite Movies</h1>
            <div className="favourites-container">
                {favourites.map((movie) => (
                    <div key={movie.id} className="favourite-movie">
                        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                        <h3>{movie.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
}
}

export default Favorite;
// This component displays a message when there are no favorite movies.