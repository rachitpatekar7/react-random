import './css/App.css'
import NavBar from './components/NavBar'
// The NavBar component is imported to provide navigation links for the application.
import Home from './pages/home'
import Favorite from './pages/favourites'
import { Route, Routes } from 'react-router-dom'
import { MovieProvider } from './contexts/MovieContext'
// This is the main App component of the MoMovies application, which serves as the entry point for the React application.



function App() {
  // The App component imports the MovieCard component and the Home page component.
  return (
    <MovieProvider>
      <NavBar />
    <main className = "main-content">
      <Routes> 
            <Route path="/" element={<Home />} />
            <Route path="/favourites" element={<Favorite />} />
      </Routes>
      </main>
      </MovieProvider>
  )
  // The App component returns a main element with a class name of "main-content".
    
}


export default App
//38:03
//<>
  //    <Home />
    //</> //fragment. acts as a parent element to avoid using an extra div
  