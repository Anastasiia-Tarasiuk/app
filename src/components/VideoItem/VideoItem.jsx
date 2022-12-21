import {ButtonComponent} from "../Button";
import {useDispatch, useSelector} from "react-redux";
import {playCurrentVideo, editVideo} from "../../redux/slice/videoSlice";
import {EditVideoItemModal} from "../EditVideoItemModal/EditVideoItemModal";
import {useState} from "react";


export const VideoItem = ({name, link, id}) => {
    const [showModal, setShowModal] = useState(false);

    const dispatch = useDispatch();
    const currentVideoLink = useSelector((state) => state.videos.currentVideo);

    function handlePlayButtonClick() {
        if (currentVideoLink !==link) {
            dispatch(playCurrentVideo(link));
        }
    }

    function handleDeleteButtonClick() {

    }

    return <>
        <li>
            {name}
        </li>
        <ButtonComponent className="play" type="button" text="Play" onClick={handlePlayButtonClick}/>
        <ButtonComponent className="rename" type="button" text="Rename" onClick={() => setShowModal(!showModal)}/>
        <EditVideoItemModal shown={showModal} close={() => setShowModal(!showModal)}/>
        <ButtonComponent className="delete" type="button" text="Delete" onClick={handleDeleteButtonClick}/>
    </>

}