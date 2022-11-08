import { Link } from "react-router-dom";
import { ButtonComponent } from "./Button";

export const AppBar = () => {
    return (
        <nav>
            <Link to="register"><ButtonComponent className="registerButton" type="button" text="Sign up" /></Link>
            <Link to="login"><ButtonComponent className="loginButton" type="button" text="Log in" /></Link>
        </nav>
    )
}