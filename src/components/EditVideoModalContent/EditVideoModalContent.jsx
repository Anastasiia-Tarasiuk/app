import {FormInput} from "../FormInput";
import {ButtonComponent} from "../Button";
import {CancelButton, DeleteButton} from "../ModalOverlay/ModalOverlay.styled";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {deleteVideo, editVideo, getCurrentVideo} from "../../redux/slice/videoSlice";
import Notiflix from "notiflix";

export const EditVideoModalContent = ({name, link, id, close}) => {
    const dispatch = useDispatch();
    const [newName, setNewName] = useState('');

    const currentVideo = useSelector((state) => state.videos.currentVideo);

    function handleRenameButtonClick() {
        if (newName !== '') {
            dispatch(editVideo({videoName: newName, videoLink: link, videoId: id}));
            if (currentVideo.videoId === id) {
                dispatch(getCurrentVideo({videoName: newName, videoLink: link, videoId: id}));
            }
            close();
        } else {
            Notiflix.Notify.warning('Enter new name' );
        }
    }

    function handleCancelButtonClick() {
        close();
    }

    function handleDeleteButtonClick() {
        dispatch(deleteVideo({link, id, name}));
        Notiflix.Notify.success('Video was deleted' );
    }

    return <>
        <h2>{"Edit video"}</h2>
        <FormInput labelText="Enter new name" inputType="text" inputName="videoName" onChange={value => setNewName(value)} />
        <div>
            <ButtonComponent className="rename" type="button" text="Rename" onClick={handleRenameButtonClick}/>
            <DeleteButton className="delete" type="button" text="Delete" onClick={handleDeleteButtonClick}/>
            <CancelButton className="cancel" type="button" text="Cancel" onClick={handleCancelButtonClick}/>
        </div>
    </>
}