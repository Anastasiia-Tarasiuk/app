import {useSelector} from "react-redux";
import {ButtonComponent} from "../Button";
import {useState} from "react";
import {FormInput} from "../FormInput";
import {ModalCloseButton} from "../ModalCloseButton/ModalCloseButton";
import {createPortal} from "react-dom";
import {Modal, Overlay} from "./EditVideoItemModal.styled";

const modalRoot = document.querySelector('#modal-root');

export const EditVideoItemModal = ({ shown, close }) => {
    const videoToEdit = useSelector((state) => state.videos.editedVideo);
    const [name, setName] = useState('');

    function handleRenameButtonClick() {
        console.log('handleRenameButtonClick')
    }

    return shown && createPortal(
         <Overlay onClick={close}>
            <Modal onClick={e=>e.stopPropagation()}>
                <h2>{"Edit " + videoToEdit.name}</h2>
                <FormInput labelText="Enter new name" inputType="text" inputName="videoName" onChange={value => setName(value)} />
                <ButtonComponent className="rename" type="button" text="Rename" onClick={handleRenameButtonClick}/>
                <ModalCloseButton onClick={close}/>
            </Modal>
        </Overlay>,
        modalRoot
    )
}