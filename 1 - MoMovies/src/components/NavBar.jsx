import {Link} from 'react-router-dom';
import "../css/Navbar.css";
import '../css/animations.css';

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" style={{ color: 'white' }}>MoMovies</Link>
      </div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/favourites">Favourites</Link>
      </div>
    </nav>
  );
}

export default NavBar;