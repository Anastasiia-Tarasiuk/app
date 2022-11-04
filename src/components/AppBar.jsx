import { Button } from "./Button";
import { Link } from "react-router-dom";

export const AppBar = () => {
    return (
        <nav>
            <Link to="register"><Button type="button" text="Sign up" /></Link>
            <Link to="login"><Button type="button" text="Log in" /></Link>
            {/* <Link to="/"><Button type="button" text="Logout"/></Link> */}
        </nav>
    )
}