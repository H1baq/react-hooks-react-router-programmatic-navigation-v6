import { NavLink} from "react-router-dom";
import "./NavBar.css";

function NavBar({ logout }) {

  return (
    <nav>
      <NavLink
        to="/"
        className="nav-link" 
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className="nav-link"
      >
        About
      </NavLink>
      {/*Add the logout function to handle the onclick event*/}
      <button onClick={logout}>logout</button>
    </nav>
  );
}

export default NavBar;
