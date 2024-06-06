import { Link } from "react-router-dom";
import { useUserContext } from "../../context/userContext";
import "./Navbar.css";

export default function Navbar() {
  const { userData } = useUserContext();
  console.log(userData);
  return (
    <nav>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        {userData && (
          <div>
            <Link to="/profil">
              <li>profil</li>
            </Link>
          </div>
        )}
        <Link to="/login">
          <li>Login</li>
        </Link>
      </ul>
    </nav>
  );
}
