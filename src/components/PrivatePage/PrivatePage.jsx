import { Message } from "../Message";
import {useSelector} from "react-redux";
import {Sidebar} from "../Sidebar/Sidebar";
import {AddVideoBar} from "../AddVideoBar/AddVideoBar";
import {Player} from "../Player/Player";
import {UserMenu} from "../UserMenu/UserMenu";
import {toggleLoggedInUser} from "../../redux/slice/userSlice";
import {getCurrentVideo} from "../../redux/slice/videoSlice";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {ButtonComponent} from "../Button";
import {UserMenuWrapper} from "./PrivatePage.styled";

export const PrivatePage = () => {
    const loggedInUserName = useSelector((state) => state.users.loggedInUser.name);
    const currentVideoLink = useSelector((state) => state.videos.currentVideo).videoLink;
    const currentVideoName = useSelector((state) => state.videos.currentVideo).videoName;

    const navigate = useNavigate();
    const dispatch = useDispatch();

    function handleButtonClick() {
        navigate("../");
        dispatch(toggleLoggedInUser( null ));
        dispatch(getCurrentVideo({} ));
    }

    return (
        <>
            <UserMenuWrapper>
                <UserMenu/>
                <ButtonComponent className="logoutButton" type="button" text="Logout" onClick={handleButtonClick} />
            </UserMenuWrapper>
            <Message text= {"Welcome to your playlist, " + loggedInUserName}/>
            <Sidebar/>
            <AddVideoBar/>
            <Player src={currentVideoLink} name={currentVideoName}/>
        </>
    )
}