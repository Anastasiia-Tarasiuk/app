import { Message } from "../Message";
import {useSelector} from "react-redux";
import {Sidebar} from "../Sidebar/Sidebar";
import {AddVideoBar} from "../AddVideoBar/AddVideoBar";
import {Player} from "../Player/Player";
import {UserMenu} from "../UserMenu/UserMenu";

export const PrivatePage = () => {
    const loggedInUserName = useSelector((state) => state.users.loggedInUser.name);
    const currentVideoLink = useSelector((state) => state.videos.currentVideo).videoLink;
    const currentVideoName = useSelector((state) => state.videos.currentVideo).videoName;

    return (
        <>
            <UserMenu/>
            <Message text= {"Welcome to your playlist, " + loggedInUserName}/>
            <Sidebar/>
            <AddVideoBar/>
            <Player src={currentVideoLink} name={currentVideoName}/>
        </>
    )
}