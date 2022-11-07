import { Message } from "./Message";
import { ButtonComponent } from "./Button";
import { useNavigate } from "react-router-dom";
import { usersStorage } from "./userStorage";


export const PrivatePage = () => {

    const navigate = useNavigate();

    function handleButtonClick() {
        navigate("../");
        localStorage.clear('users');
        usersStorage.splice(0, usersStorage.length);
    }

    return (
        <>
            <ButtonComponent className="logoutButton" type="button" text="Logout" onClick={handleButtonClick} />
            <Message text="Welcome to private page" />
        </>
    )
}