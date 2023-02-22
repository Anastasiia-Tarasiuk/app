import {LoginForm} from "../LoginForm";
import {Link} from "react-router-dom";
import { RegisterButton, RegisterWrapper } from "./PublicPage.styled";
import { Message } from "../Message/Message";

export const PublicPage = () => {
    return <>
        <LoginForm/>
        <RegisterWrapper>
            <Message text="or sign up" />
            <Link to="register"><RegisterButton className="registerButton" type="button" text="Sign up" /></Link>
        </RegisterWrapper>

    </>
}