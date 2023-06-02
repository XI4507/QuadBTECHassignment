import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img
          src="https://static.tvmaze.com/images/tvm-header-logo.png"
          alt="logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>
             <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <Link to="/corporates">Corporates</Link>
          </li>
          <li>
            <Link to="/offers">Offers</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
