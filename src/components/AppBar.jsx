import { ButtonComponent } from "./Button";
import { Link } from "react-router-dom";

export const AppBar = () => {
    return (
        <nav>
            <Link to="register"><ButtonComponent className="registerButton" type="button" text="Sign up" /></Link>
            <Link to="login"><ButtonComponent className="loginButton" type="button" text="Log in" /></Link>
        </nav>
    )
}