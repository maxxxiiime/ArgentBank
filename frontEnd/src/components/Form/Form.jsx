import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./form.scss";


export default function Form() {
  const navigate = useNavigate(); 
  // stock les valeurs du mail et du mdp
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); 

  // fonction pour gérer le submit du form
  const handleSubmit = async (e) => {
    e.preventDefault(); // Empêche le reload du form par défaut

  // formData recup les donnés du form
  const formData = {
    email: email,
    password: password,
  };

  try {
    const response = await fetch("http://localhost:3001/api/v1/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
        // si HTTP ok (statut 200)
        if (response.ok) {
          // réponse en JSON
          const responseData = await response.json();
          console.log(responseData);

            // recup et stock le token
            const token = responseData.body.token;
            localStorage.setItem("authToken", token);
          navigate("/user");
        } else {
          console.error("Erreur :", response.statusText);
          setErrorMessage("email or password incorrect");
        }
      } catch (error) {
        console.error("Erreur :", error);
        setErrorMessage("an error has occurred");
      }
    };
  
  return (
    <div>
        <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>

<form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input type="text" 
            id="username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
             />
          </div>
          <div className="input-wrapper">

            <label htmlFor="password">Password</label>
            <input type="password" 
            id="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <button type="submit" className="sign-in-button">
            Sign In
          </button>
        </form>
        </section>
    </div>
  )
}