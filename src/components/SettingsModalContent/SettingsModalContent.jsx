import {ButtonComponent} from "../Button";
import {CancelButton} from "../ModalOverlay/ModalOverlay.styled";
import {useDispatch, useSelector} from "react-redux";
import {deleteUser} from "../../redux/slice/userSlice";
import {deleteAllVideos} from "../../redux/slice/videoSlice";
import Notiflix from "notiflix";
import {ModalTitle} from "../EditVideoModalContent/EditVideoModalContent.styled";

export const SettingsModalContent = ({close}) => {
    const dispatch = useDispatch();

    const currentUserId = useSelector((state) => state.users.loggedInUser.id);

    function handleDeleteButtonClick() {
        dispatch(deleteUser(currentUserId));
        dispatch(deleteAllVideos(currentUserId));
        close();
        Notiflix.Notify.success('User was deleted');
    }

    function handleCancelButtonClick() {
        close();
    }

    return <>
        <ModalTitle>{"Are you sure you want to delete user?"}</ModalTitle>
        <div>
            <ButtonComponent className="delete" type="button" text="Delete" onClick={handleDeleteButtonClick}/>
            <CancelButton className="cancel" type="button" text="Cancel" onClick={handleCancelButtonClick}/>
        </div>
    </>
}