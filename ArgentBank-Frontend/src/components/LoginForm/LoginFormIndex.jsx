import "../../styles/main.css";

import CheckBoxField from "../CheckBoxField/CheckBoxFieldIndex";
import InputField from "../InputField/InputFieldIndex";
import SignInButton from "../SigInButton/SignInButtonIndex";
import UserIcon from "../UserIcon/UserIconIndex";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { setAuthToken } from "../../utils/auth";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, selectAuthStatus, selectAuthError } from "../../store/features/auth/authSlice";

/***
 * Composant LoginForm - Gère le formulaire de connexion de la page Login
 * @return {JSX.Element} - Formulaire de connexion
 *
 */

const LoginForm = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch()

 // on utilise les selecteurs pour accéder a l'état de l'authentification
  const status = useSelector(selectAuthStatus);
  const error = useSelector(selectAuthError);

  // état local du formaulaire 
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    rememberMe: false,
  });

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
    e.preventDefault()
console.log("Tentative de connexion...")

try {
  // Dispatch de l'action loginUSer avec les credentials (ensuite loginUser dans authSlice fait la requête API, pdt ce tps status devient loading, si succès ...)
  const result = await dispatch(loginUser({
    email: formData.username,
    password: formData.password,
    rememberMe: formData.rememberMe
  })).unwrap() // unwrap pour gérer les erreurs c

  console.log("✅ Connexion réussie !");
  navigate("/user"); //Si ok,  redirection vers le dashboard du user

} catch (error) {
  //Sinon,  les erreurs sont déjà gérée dans le thunk
  console.error("❌ Erreur de connexion:", error);
}

 };



  return (


    <section className="sign-in-content">
      <UserIcon size="large" />
      {/*A ajuster le style, manque un espace entre l icon et le texte*/}
      <h1>Sign In</h1>
      {/* {error && <div className="error-text">{error}</div>}  */}
      <form onSubmit={handleSubmit}>
        <InputField
          id="username"
          name="username"
          label="Email"
          type="email" 
          autoComplete="username"
          value={formData.username}
          onChange={handleChange}
          disabled={status === "loading"} // empêche la soumission du formulaire si le statut est "loading"
        />
        <InputField
          id="password"
          name="password"
          label="Password"
          type="password"
          autoComplete="current-password"
          value={formData.password}
          onChange={handleChange}
          disabled={status === "loading"} 
        />
        <CheckBoxField
          id="remember-me"
          name="rememberMe" 
          label="Remember me"
          defaultChecked={false} // utiliser defaultCheck a la place de check car creer un erreur en console revoir pourquoi
          onChange={handleChange}
          disabled={status === "loading"} // empêche la soumission du formulaire si le statut est "loading"
        />
        <SignInButton type="submit"
         disabled={status === "loading"}
         text={status === "loading" ? "Loading..." : "Sign In"} />
      </form>
    </section>
  );
};

export default LoginForm;
