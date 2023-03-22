
import {useSelector} from "react-redux";
import {Sidebar} from "../../components/Sidebar/Sidebar";
import {AddVideoBar} from "../../components/AddVideoBar/AddVideoBar";
import {Player} from "../../components/Player/Player";
import {useNavigate} from "react-router-dom";
import { SearchText, SearchLink} from "./PrivateMainPage.styled";
import { Message } from "../../components/Message/Message";
import { getCurrentVideo } from "../../redux/slice/videoSlice";
import { useDispatch } from "react-redux";
import { createRef } from "react";
import {Container} from "../../components/Container/Container";

export const PrivateMainPage = ({modalSize}) => {
    const loggedInUserName = useSelector((state) => state.users.loggedInUser.name);
    const currentVideoLink = useSelector((state) => state.videos.currentVideo).videoLink;
    const currentVideoName = useSelector((state) => state.videos.currentVideo).videoName;

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const ref = createRef();

    function handleSearchButtonClick() {
        navigate("../search");
        dispatch(getCurrentVideo({}));
    }

    function onModalShow() {
        ref.current.pause();
        // stopVideo()
    }

//     function stopVideo() {
//         const iframe = document.querySelector("iframe");
//         const video = document.querySelector('video');
        
//         if (iframe) {
//             console.log(iframe)
//             // iframe.contentWindow.TSC.mediaInterface.pause(); 
//             //
//             // iframe.contentWindow.postMessage( '{"event":"command", "func":"pauseVideo", "args":""}', '*');
// iframe.pauseVideo();
     

//         }
//         if (video) {
//             video.pause();
//         }
//     };
    
     

    // function modalСlosed(e) {
    //     // isModalShown(false);
    //     console.log("modal", e.target);
    //     ref.current.play();
    // }
    
    return <Container>
        <Message text={"Welcome to your playlist, " + loggedInUserName} />
        <Sidebar modalSize={modalSize} onClick={e=> onModalShow(e)}/>
        <AddVideoBar labelText={"Set the link here"} buttonText={"Add"} />
        <Player ref={ref} src={currentVideoLink} name={currentVideoName} />
        <SearchText className="text">Or <SearchLink onClick={handleSearchButtonClick}>Search</SearchLink> for new videos</SearchText>
    </Container>

}