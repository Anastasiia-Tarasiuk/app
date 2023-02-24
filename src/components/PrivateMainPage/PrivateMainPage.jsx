
import {useSelector} from "react-redux";
import {Sidebar} from "../Sidebar/Sidebar";
import {AddVideoBar} from "../AddVideoBar/AddVideoBar";
import {Player} from "../Player/Player";
import {useNavigate} from "react-router-dom";
import { SearchText, ButtonComponentWithMargin} from "./PrivateMainPage.styled";
import { SharedLayout } from "../SharedLayout/SharedLayout";
import { Message } from "../Message/Message";
import { getCurrentVideo } from "../../redux/slice/videoSlice";
import { useDispatch } from "react-redux";
import { createRef } from "react";
import { useState } from "react";

export const PrivateMainPage = ({modalSize}) => {
    const loggedInUserName = useSelector((state) => state.users.loggedInUser.name);
    const currentVideoLink = useSelector((state) => state.videos.currentVideo).videoLink;
    const currentVideoName = useSelector((state) => state.videos.currentVideo).videoName;
    // const [isModalShown, setIsModalShown] = useState(false);



    const navigate = useNavigate();
    const dispatch = useDispatch();

    const ref = createRef();

    function handleSearchButtonClick() {
        navigate("../search");
        dispatch(getCurrentVideo({}));
    }

  

    function onModalShow(e) {
        // console.log("modal", e.target);
        ref.current.pause();
    }

    // function modalСlosed(e) {
    //     // isModalShown(false);
    //     console.log("modal", e.target);
    //     ref.current.play();
    // }
    
    return (
        <>
            <SharedLayout modalSize={modalSize} onClick={e=> onModalShow(e)} />
            <Message text={"Welcome to your playlist, " + loggedInUserName} />
            <Sidebar modalSize={modalSize} onClick={e=> onModalShow(e)}/>
            <AddVideoBar labelText={"Set the link here"} buttonText={"Add"} />            
            <Player ref={ref} src={currentVideoLink} name={currentVideoName} /> 
            <SearchText className="text">Or<ButtonComponentWithMargin className="searchButton" type="button" text="Search" onClick={handleSearchButtonClick}/>for new videos</SearchText>
        </>
    )
}