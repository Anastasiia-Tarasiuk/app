import { Message } from "../Message";
import {useSelector} from "react-redux";
import {Sidebar} from "../Sidebar/Sidebar";
import {AddVideoBar} from "../AddVideoBar/AddVideoBar";
import {Player} from "../Player/Player";
import {useNavigate} from "react-router-dom";
import { SearchText, ButtonComponentWithMargin} from "./PrivateMainPage.styled";
import { SharedLayout } from "../SharedLayout/SharedLayout";

export const PrivateMainPage = () => {
    const loggedInUserName = useSelector((state) => state.users.loggedInUser.name);
    const currentVideoLink = useSelector((state) => state.videos.currentVideo).videoLink;
    const currentVideoName = useSelector((state) => state.videos.currentVideo).videoName;

    const navigate = useNavigate();

    function handleSearchButtonClick() {
        navigate("../search");
    }

    return (
        <>
            <SharedLayout/>
            <Message text= {"Welcome to your playlist, " + loggedInUserName}/>
            <Sidebar/>
            <AddVideoBar labelText={"Set the link here"} buttonText={"Add"}/>
            <Player src={currentVideoLink} name={currentVideoName} />
            <SearchText className="text">Or<ButtonComponentWithMargin className="searchButton" type="button" text="Search" onClick={handleSearchButtonClick}/>for new videos to watch</SearchText>
        </>
    )
}