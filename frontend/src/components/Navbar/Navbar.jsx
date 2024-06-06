import { Link } from "react-router-dom";
import './Navbar.css'

export default function Navbar() {
  return (
    <nav>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/login">
          <li>Login</li>
        </Link>
      </ul>
    </nav>
  );
}
