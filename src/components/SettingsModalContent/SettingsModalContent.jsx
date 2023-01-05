import {ButtonComponent} from "../Button";
import {CancelButton} from "../ModalOverlay/ModalOverlay.styled";
import {useDispatch, useSelector} from "react-redux";
import {deleteUser} from "../../redux/slice/userSlice";
import {deleteAllVideos} from "../../redux/slice/videoSlice";

export const SettingsModalContent = ({close}) => {
    const dispatch = useDispatch();

    const currentUserId = useSelector((state) => state.users.loggedInUser.id);

    function handleDeleteButtonClick() {
        dispatch(deleteUser(currentUserId));
        dispatch(deleteAllVideos(currentUserId));
        close();
    }

    function handleCancelButtonClick() {
        close();
    }

    return <>
        <h2>{"Delete user"}</h2>
        <div>
            <ButtonComponent className="delete" type="button" text="Delete" onClick={handleDeleteButtonClick}/>
            <CancelButton className="cancel" type="button" text="Cancel" onClick={handleCancelButtonClick}/>
        </div>
    </>
}