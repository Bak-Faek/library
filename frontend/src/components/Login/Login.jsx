import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

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
        //   const user = response.json();
        //   login(user)
          navigate("/");
        } else {
          setError("Email ou mot de passe incorrect");
          navigate("/login");
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <section>
      <div>test</div>
      <input
        id="email"
        label="Email Address"
        name="email"
        value={email}
        onChange={handleMailChange}
      />
      <input
        name="password"
        label="Password"
        type="password"
        id="password"
        value={password}
        onChange={handlePasswordChange}
      />
      <button onClick={handleSubmit}>se connecter</button>
    </section>
  );
}