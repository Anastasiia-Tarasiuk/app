import {FormInput} from "../FormInput";
import {ButtonComponent} from "../Button";
import {CancelButton} from "../ModalOverlay/ModalOverlay.styled";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {editUser} from "../../redux/slice/userSlice";

export const RenameUserModalContent = ({close}) => {
    const dispatch = useDispatch();
    const [newName, setNewName] = useState('');

    function handleRenameButtonClick() {
        if (newName !== '' ) {
            dispatch(editUser(newName));
            close();
        }
    }

    function handleCancelButtonClick() {
        close();
    }

    return <>
        <h2>{"Rename user"}</h2>
        <FormInput labelText="Enter new name" inputType="text" inputName="videoName" onChange={value => setNewName(value)} />
        <div>
            <ButtonComponent className="rename" type="button" text="Rename" onClick={handleRenameButtonClick}/>
            <CancelButton className="cancel" type="button" text="Cancel" onClick={handleCancelButtonClick}/>
        </div>
    </>
}