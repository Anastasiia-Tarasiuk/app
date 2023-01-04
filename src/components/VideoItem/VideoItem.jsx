import {ButtonComponent} from "../Button";
import {useDispatch, useSelector} from "react-redux";
import {getCurrentVideo} from "../../redux/slice/videoSlice";
import {ModalOverlay} from "../ModalOverlay/ModalOverlay";
import {useState} from "react";
import {VideoItemButton} from "./VideoItem.styled";
import {EditVideoModalContent} from "../EditVideoModalContent/EditVideoModalContent";

export const VideoItem = ({name, link, id}) => {
    const [showModal, setShowModal] = useState(false);

    const dispatch = useDispatch();
    const currentVideo = useSelector((state) => state.videos.currentVideo)
    const currentVideoLink = currentVideo.videoLink;

    function handlePlayButtonClick() {
        if (currentVideoLink !==link) {
            dispatch(getCurrentVideo({videoLink: link, videoName: name, videoId: id}));
        }
    }

    return <>
        <li>
            {name}
        </li>
        <ButtonComponent className="play" type="button" text="Play" onClick={handlePlayButtonClick}/>
        <VideoItemButton className="edit" type="button" text="Edit" onClick={() => setShowModal(!showModal)}/>
        <ModalOverlay shown={showModal} close={() => setShowModal(!showModal)} content={<EditVideoModalContent name={name} link={link} id={id} close={() => setShowModal(!showModal)} />}/>
    </>

}