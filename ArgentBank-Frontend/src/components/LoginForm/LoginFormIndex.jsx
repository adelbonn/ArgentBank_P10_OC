import "../../styles/main.css";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectIsAuthenticated } from "../../store/features/auth/authSlice";
// import { setAuthToken } from "../../utils/auth";
import { useLoginMutation } from "../../store/api/argentBankApi";

import CheckBoxField from "../CheckBoxField/CheckBoxFieldIndex";
import InputField from "../InputField/InputFieldIndex";
import SignInButton from "../SigInButton/SignInButtonIndex";
import Icon from "../Icons/IconIndex";

/***
 * Composant LoginForm - Gère le formulaire de connexion de la page Login
 * @return {JSX.Element} - Formulaire de connexion
 *
 */

const LoginForm = () => {
  const navigate = useNavigate();
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const [login, { isLoading, error }] = useLoginMutation();

  // Redirection si dejà authentifié
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/user");
    }
  }, [isAuthenticated, navigate]);
  
  // état local du formulaire
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    rememberMe: false,
  });

  // Récupération des identifiants (email) sauvegardés (vérifié si bien chargé dans le localStorage)
  useEffect(() => {
    const rememberedEmail = localStorage.getItem("rememberedEmail");
    if (rememberedEmail) {
      setFormData((prev) => ({
        ...prev,
        username: rememberedEmail,
        rememberMe: true,
      }));
    }
  }, []);


  // Gestion des changements dans le formulaire
  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: type === "checkbox" ? checked : value,
    }));
  };

  // Soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // gestion de rememberMe (uniquement l'email, plus sécur)(sauvegardé dans le localStorage) 
      if (formData.rememberMe) {
        localStorage.setItem("rememberedEmail", formData.username);
      } else {
        localStorage.removeItem("rememberedEmail");
      }
      // Appel de l'API avec RTK query
      await login({
        email: formData.username,
        password: formData.password,
      }).unwrap(); // extrait les données en cas de succès, lance une erreur en cas déchec

      // le token sera géré par le authSlice via les matchers
      console.log("✅ Connexion réussie !");
    } catch (error) {
      console.error("❌ Erreur de connexion:", error);
    }
  };

  return (
    <section className="sign-in-content">
      <Icon size="large" type="user" />
      {/*A ajuster le style, manque un espace entre l icon et le texte*/}
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <InputField
          id="username"
          name="username"
          label="Email"
          type="email"
          autoComplete="username"
          value={formData.username || ""}
          onChange={handleChange}
          disabled={isLoading} 
        />
        <InputField
          id="password"
          name="password"
          label="Password"
          type="password"
          autoComplete="current-password"
          value={formData.password || ""} 
          onChange={handleChange}
          disabled={isLoading}
        />
        <CheckBoxField
          id="rememberMe"
          name="rememberMe"
          label="Remember me"
          checked={formData.rememberMe} 
          onChange={handleChange}
          disabled={isLoading}
        />
        <SignInButton
          type="submit"
          disabled={isLoading}
          text={isLoading ? "Loading..." : "Sign In"}
          onClick={handleSubmit}
        />
        {error && (
          <div className="error-text">
            {error.data?.message || "An error occurred"}
          </div>
        )}
      </form>
    </section>
  );
};

export default LoginForm;
