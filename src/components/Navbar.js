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
          <Link to="about">About</Link>
        </li>
        <li>
          <Link to="menu">Menu</Link>
        </li>
        <li>
          <Link to="gallery">Gallery</Link>
        </li>
        <li>
          <Link to="contact">Contact</Link>
        </li>
        <li>
          <Link to="news">News</Link>
        </li>
      </ul>
    </nav>
  );
}
