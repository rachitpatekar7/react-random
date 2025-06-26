import MovieCard from '../components/MovieCard'
function Home()
{
    const movies = [
        {id : 1, title: "Sivaji The Boss", release_date: "2002", url: "https://example.com/movie-poster.jpg"},
        {id : 2, title: "Gabbar is Back", release_date: "2017", url: "https://example.com/movie-poster.jpg"},
        {id : 3, title: "I KNOW SOME Ns in NEW YORK", release_date: "2010", url: "https://example.com/movie-poster.jpg"}
    ]
    return <div className = "home">
        <div className = "movies-grid">
            {movies.map(movie => (
                <MovieCard key={movie.id} movie={movie} />
            ))} 
        </div>
    </div>
}
//.map is like an array map function, but for React components
export default Home;