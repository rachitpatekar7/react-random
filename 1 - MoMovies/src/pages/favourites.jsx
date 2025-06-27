import "../css/Favorites.css";

function Favorite() {
    return (
        <div className="favourites-empty">
            <h1>No Favourite Movies Yet.</h1>
            <p>Start adding movies to your favorites and they will appear here</p>
        </div>
    );
}

export default Favorite;
// This component displays a message when there are no favorite movies.