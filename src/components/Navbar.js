import { Link } from "react-router-dom";
import "../stylesheets/Navbar.css";

export default function Navbar() {
  return (
    <nav>
      <div className="name">
        <h3>winta</h3>
        <p>STEAKHOUSE+BAR</p>
      </div>

      <ul>
        {/* <li><Link to='Home'>Home</Link></li> */}
        <li>
          <Link to="About">About</Link>
        </li>
        <li>
          <Link to="Menu">Menu</Link>
        </li>
        <li>
          <Link to="Gallery">Gallery</Link>
        </li>
        <li>
          <Link to="Contact">Contact</Link>
        </li>
        <li>
          <Link to="News">News</Link>
        </li>
      </ul>
    </nav>
  );
}
