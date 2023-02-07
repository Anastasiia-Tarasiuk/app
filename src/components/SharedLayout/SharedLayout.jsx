import { ButtonComponent } from "../Button";
import { UserMenu } from "../UserMenu/UserMenu";

import {toggleLoggedInUser} from "../../redux/slice/userSlice";
import { getCurrentVideo } from "../../redux/slice/videoSlice";
import {useNavigate} from "react-router-dom";
import { useDispatch } from "react-redux";
import { UserMenuWrapper} from "./SharedLayout.styled";

export const SharedLayout = () => {
    const href = window.location.pathname;

    const navigate = useNavigate();
    const dispatch = useDispatch();

    function handleButtonClick() {
        navigate("../");
        dispatch(toggleLoggedInUser( null ));
        dispatch(getCurrentVideo({} ));
    }

    function handleBackButtonClick() {
        navigate("../main");
    }

    return <UserMenuWrapper>
                {(href === "/search") && <ButtonComponent className="backToMainButton" type="button" text="Back" onClick={handleBackButtonClick} />}
                <UserMenu/> 
                <ButtonComponent className="logoutButton" type="button" text="Logout" onClick={handleButtonClick} />
            </UserMenuWrapper>

}