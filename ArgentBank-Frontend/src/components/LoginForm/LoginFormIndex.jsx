import "../../styles/main.css";
import CheckBoxField from "../CheckBoxField/CheckBoxFieldIndex";
import InputField from "../InputField/InputFieldIndex";
import SignInButton from "../SigInButton/SignInButtonIndex";
import UserIcon from "../UserIcon/UserIconIndex";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { setAuthToken } from "../../utils/auth";

/***
 * Composant LoginForm - Gère le formulaire de connexion de la page Login
 * @return {JSX.Element} - Formulaire de connexion
 *
 */

const LoginForm = () => {
  const navigate = useNavigate();

  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("🚀 Tentative de connexion...");

    try {
      console.log("📡 Envoi requête API...");

      const response = await fetch("http://localhost:3001/api/v1/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.username,
          password: formData.password,
        }),
      });

      const data = await response.json();
      console.log("📥 Réponse API:", {
        status: response.status,
        ok: response.ok,
        hasToken: !!data.body?.token,
      });

      if (response.ok) {
        console.log("✅ Authentification réussie");
        setAuthToken(data.body.token); // Stocke le token dans le local storage
        navigate("/user"); // redirige vers la page utilisateur
      } else {
        console.warn("❌ Erreur connexion:", data.message);
        setError(data.message || "Error during loggin");
      }
    } catch (err) {
      console.error("🔥 Erreur:", {
        name: err.name,
        message: err.message,
        stack: err.stack,
      });
      setError("Connection error, please try again");
    }
  };

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    rememberMe: false,
  });

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <section className="sign-in-content">
      <UserIcon size="large" />
      {/*ajuster le style, manque un espace entre l icon et le texte*/}
      <h1>Sign In</h1>
      {error && <div className="error-text">{error}</div>} 
      <form onSubmit={handleSubmit}>
        <InputField
          id="username"
          label="Username"
          type="text"
          autoComplete="username"
          value={formData.username}
          onChange={handleChange}
        />
        <InputField
          id="password"
          label="Password"
          type="password"
          autoComplete="current-password"
          value={formData.password}
          onChange={handleChange}
        />
        <CheckBoxField
          id="remember-me"
          label="Remember me"
          defaultChecked={false} // utiliser defaultCheck a la place de check car creer un erreur en console revoir pourquoi
          onChange={handleChange}
        />
        <SignInButton type="submit" />
      </form>
    </section>
  );
};

export default LoginForm;
