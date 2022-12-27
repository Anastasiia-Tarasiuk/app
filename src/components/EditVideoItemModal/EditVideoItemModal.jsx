import {useDispatch, useSelector} from "react-redux";
import {ButtonComponent} from "../Button";
import {useState} from "react";
import {FormInput} from "../FormInput";
import {ModalCloseButton} from "../ModalCloseButton/ModalCloseButton";
import {createPortal} from "react-dom";
import {Modal, Overlay, DeleteButton, CancelButton} from "./EditVideoItemModal.styled";
import {editVideo, deleteVideo, getCurrentVideo} from "../../redux/slice/videoSlice";

const modalRoot = document.querySelector('#modal-root');

export const EditVideoItemModal = ({ shown, close, link, id, name}) => {
    const dispatch = useDispatch();
    const [newName, setNewName] = useState('');

    const currentVideo = useSelector((state) => state.videos.currentVideo);

    function handleRenameButtonClick() {
        if (newName !== '') {
            dispatch(editVideo({videoName: newName, videoLink: link, videoId: id}));
            if (currentVideo.videoId === id){
                dispatch(getCurrentVideo({videoName: newName, videoLink: link, videoId: id}));
            }
            close();
        }
    }

    function handleCancelButtonClick() {
        close();
    }

    function handleDeleteButtonClick(){
        dispatch(deleteVideo({link, id, name}));
    }

    return shown && createPortal(
         <Overlay onClick={close}>
            <Modal onClick={e=>e.stopPropagation()}>
                <h2>{"Edit " + name}</h2>
                <FormInput labelText="Enter new name" inputType="text" inputName="videoName" onChange={value => setNewName(value)} />
                <div>
                    <ButtonComponent className="rename" type="button" text="Rename" onClick={handleRenameButtonClick}/>
                    <DeleteButton className="delete" type="button" text="Delete" onClick={handleDeleteButtonClick}/>
                    <CancelButton className="cancel" type="button" text="Cancel" onClick={handleCancelButtonClick}/>
                </div>
                <ModalCloseButton onClick={close}/>
            </Modal>
        </Overlay>,
        modalRoot
    )
}