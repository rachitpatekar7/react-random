import './App.css'
import MovieCard from './components/MovieCard'
import Home from './pages/home'
// This is the main App component of the MoMovies application, which serves as the entry point for the React application.
function App() {
const movieNumber = 1;
  return (
    <>
      <Home />
    </> //fragment. acts as a parent element to avoid using an extra div
  )
}


export default App
//38:03