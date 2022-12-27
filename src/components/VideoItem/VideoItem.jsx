import {ButtonComponent} from "../Button";
import {useDispatch, useSelector} from "react-redux";
import {getCurrentVideo} from "../../redux/slice/videoSlice";
import {EditVideoItemModal} from "../EditVideoItemModal/EditVideoItemModal";
import {useState} from "react";
import {Item, VideoItemButton} from "./VideoItem.styled";

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
        <Item>
            {name}
        </Item>
        <ButtonComponent className="play" type="button" text="Play" onClick={handlePlayButtonClick}/>
        <VideoItemButton className="edit" type="button" text="Edit" onClick={() => setShowModal(!showModal)}/>
        <EditVideoItemModal link={link} id={id} name={name} shown={showModal} close={() => setShowModal(!showModal)}/>
    </>

}