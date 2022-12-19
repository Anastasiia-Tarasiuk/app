import { useNavigate } from "react-router-dom";
import { Message } from "./Message";
import { ButtonComponent } from "./Button";
import {useDispatch, useSelector} from "react-redux";
import { toggleLoggedInUser } from '../redux/slice/userSlice';

export const PrivatePage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const loggedInUserName = useSelector((state) => state.users.loggedInUser.name);
    
    function handleButtonClick() {
        navigate("../");
        dispatch(toggleLoggedInUser( null ));
    }

    return (
        <>
            <ButtonComponent className="logoutButton" type="button" text="Logout" onClick={handleButtonClick} />
            <Message text= {"Welcome to private page, " + loggedInUserName}/>
        </>
    )
}