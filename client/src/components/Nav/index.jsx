import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import logo from '../../assets/images/pawpals.png';

function Nav() {

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row">
          <li className="mx-1">
          </li>
          <li className="mx-1">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
          <li className="mx-1">
            <Link to="/contact">
              Contact
            </Link>
          </li>
          <li className="mx-1">
            <Link to="/donation">
              Donate
            </Link>
          </li>
            <li className="mx-1">
            <Link to="/savedSearches">
              Favorites
            </Link>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/signup">
              Signup
            </Link>
          </li>
          <li className="mx-1">
            <Link to="/login">
              Login
            </Link>
          </li>
          <li className="mx-1">
            <Link to="/contact">
              Contact
            </Link>
          </li>
          <li className="mx-1">
            <Link to="/donation">
              Donate
            </Link>
          </li>
        </ul>
      );
    }
  }

  return (
    <header className="flex-row px-1">
      <h1>
        <Link to="/">
          <span role="img" aria-label="PAW PALS"></span>
          <img src={logo} className="pawpals"/>
        </Link>
      </h1>

      <nav>
        {showNavigation()}
      </nav>
    </header>
  );
}

export default Nav;
