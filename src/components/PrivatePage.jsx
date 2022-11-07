import { Message } from "./Message";
import { ButtonComponent } from "./Button";
import { useNavigate } from "react-router-dom";

export const PrivatePage = () => {
    const navigate = useNavigate();

    function handleButtonClick() {
        navigate("../");
        localStorage.removeItem('loggedInUser');
    }

    return (
        <>
            <ButtonComponent className="logoutButton" type="button" text="Logout" onClick={handleButtonClick} />
            <Message text="Welcome to private page" />
        </>
    )
}