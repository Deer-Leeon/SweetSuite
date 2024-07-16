import { Link } from "react-router-dom";
import "./navbar.css";

const Nav = () => {
  return (
    <nav className="suite__navbar section__margin">
      <Link to="/" className="suite__navbar-logo">
        Sweet Suite
      </Link>
      <div className="suite__navbar-links">
        <ul>
          <li>
            <Link to="/" className="">
              Assignments
            </Link>
          </li>
          <li>
            <Link to="/create" className="">
              Create Assignment
            </Link>
          </li>
          <li>
            <Link to="/user" className="">
              Create User
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
