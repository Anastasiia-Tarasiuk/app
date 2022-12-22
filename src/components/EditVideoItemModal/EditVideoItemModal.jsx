import {useDispatch, useSelector} from "react-redux";
import {ButtonComponent} from "../Button";
import {useState} from "react";
import {FormInput} from "../FormInput";
import {ModalCloseButton} from "../ModalCloseButton/ModalCloseButton";
import {createPortal} from "react-dom";
import {Modal, Overlay} from "./EditVideoItemModal.styled";
import {editVideo, deleteVideo} from "../../redux/slice/videoSlice";

const modalRoot = document.querySelector('#modal-root');

export const EditVideoItemModal = ({ shown, close, link, id, name}) => {
    const dispatch = useDispatch();
    const [newName, setNewName] = useState('');

    function handleRenameButtonClick() {
        if (newName !== '') {
            dispatch(editVideo({videoName: newName, videoLink: link, videoId: id}));
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
                <ButtonComponent className="rename" type="button" text="Rename" onClick={handleRenameButtonClick}/>
                <ButtonComponent className="delete" type="button" text="Delete" onClick={handleDeleteButtonClick}/>
                <ButtonComponent className="cancel" type="button" text="Cancel" onClick={handleCancelButtonClick}/>
                <ModalCloseButton onClick={close}/>
            </Modal>
        </Overlay>,
        modalRoot
    )
}