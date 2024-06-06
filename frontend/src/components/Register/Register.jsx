import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleChangeLastName = (e) => {
    setLastName(e.target.value);
  };

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const handleChangeAddress = (e) => {
    setAddress(e.target.value);
  };

  const handleChangePhone = (e) => {
    setPhone(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:8500/user", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstname,
        lastname,
        address,
        phone,
        email,
        password,
      }),
    })
    .then(response => {
      if (response.status === 201) {
        navigate("/login");
      } else {
        return response.json().then(data => {
          console.info(data);
        });
      }
    })
    .catch(err => {
      console.error(err);
    });
  };
  

  
  return (
    <section>
      <div>test</div>
      <label htmlFor="">
        Prénom
        <input
          id="prénom"
          name="prénom"
          value={firstname}
          onChange={handleFirstName}
        />
      </label>
      <label htmlFor="">
        Nom
        <input
          id="nom"
          name="nom"
          autoComplete="nom"
          value={lastname}
          onChange={handleChangeLastName}
        />
      </label>
      <label htmlFor="">
        Address
        <input
          id="address"
          name="address"
          value={address}
          onChange={handleChangeAddress}
        />
      </label>
      <label htmlFor="">
        Phone
        <input
          id="phone"
          name="phone"
          value={phone}
          onChange={handleChangePhone}
        />
      </label>
      <label htmlFor="">
        Email Address
        <input
          id="email"
          name="email"
          value={email}
          onChange={handleChangeEmail}
        />
      </label>
      <label htmlFor="">
        Password
        <input
          name="password"
          type="password"
          id="password"
          value={password}
          onChange={handleChangePassword}
        />
      </label>
      <button onClick={handleSubmit}>S'inscrire</button>
    </section>
  );
}
