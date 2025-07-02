import { Link } from "react-router-dom"
import "../css/NavBar.css"

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link className="" to="/">Movie Swisse's</Link>
      </div>
      <div className="nav-links">
        <Link className="nav-link" to="/favorites">Favorite</Link>
        <Link className="nav-link" to="/">Home</Link>
      </div>
    </nav>
  )
}

export default NavBar