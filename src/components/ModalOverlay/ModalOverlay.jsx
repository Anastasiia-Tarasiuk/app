import {ModalCloseButton} from "../ModalCloseButton/ModalCloseButton";
import {createPortal} from "react-dom";
import {Modal, Overlay} from "./ModalOverlay.styled";
import {ModalContentWrapper} from "../ModalContentWrapper/ModalContentWrapper";

const modalRoot = document.querySelector('#modal-root');

export const ModalOverlay = ({ shown, close, content, style }) => {
     return shown && createPortal(
         <Overlay onClick={close}
         >
            <Modal onClick={e=>e.stopPropagation()} style={style}>
                <ModalContentWrapper content={content}/>
                <ModalCloseButton onClick={close}/>
            </Modal>
        </Overlay>,
        modalRoot
    )
}