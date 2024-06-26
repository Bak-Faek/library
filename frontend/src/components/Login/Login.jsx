import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserContext } from "../../context/userContext";
import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { login } = useUserContext();
  const navigate = useNavigate();

  // Gestionnaire de changement de l'email

  const handleMailChange = (event) => {
    setEmail(event.target.value);
  };
  // Gestionnaire de changement du mot de passe
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  // Gestionnaire de soumission du formulaire
  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:8500/login", {
      method: "post",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((response) => {
        if (response.status === 201) {
          return response.json()
        } else {
          setError("Email ou mot de passe incorrect");
          navigate("/login");
        }
      })
      .then((data) => {
        console.log(data);
        login(data);
        navigate("/");
      })
      .catch(() => {
        console.error(error);
      });
  };
  return (
    <section className="generalContainer">
      <h2>Connectez-vous</h2>
      <div className="loginContainer">
        <label htmlFor="email">
          Email
          <input
            id="email"
            name="email"
            value={email}
            onChange={handleMailChange}
          />
        </label>

        <label htmlFor="password">
          Password
          <input
            id="password"
            name="password"
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </label>
        <button onClick={handleSubmit}>se connecter</button>
        <div>
          Vous n'avez pas encore de compte ?{" "}
          <span>
            <Link to="/register">Enregistrez-vous</Link>
          </span>
        </div>
      </div>
    </section>
  );
}
