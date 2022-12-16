import { useNavigate } from "react-router-dom";
import { Message } from "./Message";
import { ButtonComponent } from "./Button";
import { useDispatch } from "react-redux";
import { removeLoggedInUser } from '../redux/slice/userSlice';

export const PrivatePage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    function handleButtonClick() {
        navigate("../");
        dispatch(removeLoggedInUser( removeLoggedInUser ));
        localStorage.removeItem('loggedInUser');
    }

    return (
        <>
            <ButtonComponent className="logoutButton" type="button" text="Logout" onClick={handleButtonClick} />
            <Message text="Welcome to private page" />
        </>
    )
}