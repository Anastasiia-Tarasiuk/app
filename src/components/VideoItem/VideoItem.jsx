import {ButtonComponent} from "../Button";
import {useDispatch, useSelector} from "react-redux";
import {getCurrentVideo} from "../../redux/slice/videoSlice";
import {ModalOverlay} from "../ModalOverlay/ModalOverlay";
import {useState} from "react";
import {VideoItemButton} from "./VideoItem.styled";
import {EditVideoModalContent} from "../EditVideoModalContent/EditVideoModalContent";
import Notiflix from "notiflix";

export const VideoItem = ({name, link, id, onClick}) => {
    const [showModal, setShowModal] = useState(false);

    const dispatch = useDispatch();
    const currentVideo = useSelector((state) => state.videos.currentVideo)
    const currentVideoLink = currentVideo.videoLink;

    function handlePlayButtonClick() {
        if (currentVideoLink !==link) {
            dispatch(getCurrentVideo({videoLink: link, videoName: name, videoId: id}));
        } else {
            Notiflix.Notify.warning('This video is playing now');
        }
    }

    function isShowingModal(isShowing) {
        setShowModal(!showModal);
        onClick(isShowing);
    }

    function onOverlayClick(isShowing){
        setShowModal(!showModal);
        onClick(isShowing);
    }
    function onCloseButtonClick(isShowing){
        setShowModal(!showModal);
        onClick(isShowing);
    }

    return <li>
                {name}
                <div>
                    <ButtonComponent className="play" type="button" text="Play" onClick={handlePlayButtonClick}/>
                    <VideoItemButton className="edit" type="button" text="Edit" onClick={() => isShowingModal(true)}/>
                    <ModalOverlay shown={showModal} close={() => onOverlayClick(false)} content={<EditVideoModalContent name={name} link={link} id={id} close={() => onCloseButtonClick(false)} />}/>
                </div>
            </li>
}