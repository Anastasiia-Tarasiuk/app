import { Message } from "./Message";
import { Button } from "./Button";
import { useNavigate } from "react-router-dom";


export const PrivatePage = () => {

    const navigate = useNavigate();

    function handleButtonClick() {
        navigate("../");
        localStorage.clear('users');
    }

    return (
        <>
            <Button className="logoutButton" type="button" text="Logout" onClick={handleButtonClick} />
            <Message text="Welcome to private page" />
        </>
    )
}