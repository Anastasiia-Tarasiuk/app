import { useNavigate } from "react-router-dom";
import { Message } from "./Message";
import { ButtonComponent } from "./Button";
import {useDispatch, useSelector} from "react-redux";
import { toggleLoggedInUser } from '../redux/slice/userSlice';
import {Sidebar} from "./Sidebar/Sidebar";
import {AddVideoBar} from "./AddVideoBar/AddVideoBar";
import {Player} from "./Player/Player";
import {getCurrentVideo} from "../redux/slice/videoSlice";

export const PrivatePage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const loggedInUserName = useSelector((state) => state.users.loggedInUser.name);
    const currentVideoLink = useSelector((state) => state.videos.currentVideo).videoLink;
    const currentVideoName = useSelector((state) => state.videos.currentVideo).videoName;
    
    function handleButtonClick() {
        navigate("../");
        dispatch(toggleLoggedInUser( null ));
        dispatch(getCurrentVideo({} ));
    }

    return (
        <>
            <ButtonComponent className="logoutButton" type="button" text="Logout" onClick={handleButtonClick} />
            <Message text= {"Welcome to your playlist, " + loggedInUserName}/>
            <Sidebar/>
            <AddVideoBar/>
            <Player src={currentVideoLink} name={currentVideoName}/>
        </>
    )
}