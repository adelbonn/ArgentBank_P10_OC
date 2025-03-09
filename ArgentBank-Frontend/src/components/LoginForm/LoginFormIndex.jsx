import '../../styles/main.css'
import CheckBoxField from '../CheckBoxField/CheckBoxFieldIndex'
import InputField from '../InputField/InputFieldIndex'
import SignInButton from '../SigInButton/SignInButtonIndex'
import UserIcon from '../UserIcon/UserIconIndex'

/***
 * Composant LoginForm - Gère le formulaire de connexion
 * @return {JSX.Element} - Formulaire de connexion
 * 
 */

function LoginForm() {
    return (
        <section className="sign-in-content">
            {/* <i className="fa fa-user-circle sign-in-icon"></i> */}
            <UserIcon size="large" />
            <h1>Sign In</h1>
            <form>
                <InputField
                    id="username"
                    label="Username"
                    type="text"
                    autoComplete="username"
        //   value=""
        //   onChange={() => {}}
                />
                <InputField
                    id="password"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
        //   value=""
        //   onChange={() => {}}
                />
                <CheckBoxField
                    id="remember-me"
                    label="Remember me"
          defaultChecked={false} // utiliser defaultCheck a la place de check acr creer un erreur en console revoir pourquoi
        //   onChange={() => {}}
                />
                <SignInButton />
            </form>
        </section>
    )
}

export default LoginForm
