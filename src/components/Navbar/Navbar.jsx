import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="nav-wrapper">
      <div className="nav-bar">
        <div className="brand-logo">
          <h1>SL</h1>
        </div>
        <div className="menu-list">
          <Link>Home</Link>
          {/* <Link>About</Link>
          <Link>Contact</Link> */}
          <Link>Blogs</Link>
        </div>
        <div>Profile</div>
      </div>
    </nav>
  );
};

export default Navbar;
