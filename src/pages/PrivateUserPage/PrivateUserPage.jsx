import image from '../../images/no-image.jpg';
import {Message} from "../../components/Message/Message";
import {useSelector} from "react-redux";
import {ButtonComponent} from "../../components/Button";
import {useState} from "react";
import {ModalOverlay} from "../../components/ModalOverlay/ModalOverlay";
import {RenameUserModalContent} from "../../components/RenameUserModalContent/RenameUserModalContent";
import {SettingsModalContent} from "../../components/SettingsModalContent/SettingsModalContent";
import {RenameUserButton} from "./PrivateUserPage.styled";
import {Container} from "../../components/Container/Container";

export const PrivateUserPage = ({onClick}) => {
    const loggedInUserName = useSelector((state) => state.users.loggedInUser.name);
    const [showModal, setShowModal] = useState(false);
    const [showRenameContent, setShowRenameContent] = useState(true);

    function onRenameUserButtonClick() {
        setShowModal(true);
        setShowRenameContent(true);
    }

    function onDeleteUserButtonClick() {
        setShowModal(true);
        setShowRenameContent(false);
    }


    return <Container>
            <Message text={'User profile'}/>
            <img src={image} alt="User profile" width="300px"/>
            <p>{loggedInUserName}</p>
            <div>
            <RenameUserButton className='renameUserButton' type="button" text="Rename user" onClick={onRenameUserButtonClick}/>
            <ButtonComponent className='deleteUserButton' type="button" text="Delete user" onClick={onDeleteUserButtonClick}/>
            </div>
            <ModalOverlay onClick={onClick} shown={showModal} close={() => setShowModal(!showModal)} content={showRenameContent ? <RenameUserModalContent close={() => setShowModal(!showModal)} /> : <SettingsModalContent close={() => setShowModal(!showModal)} />}/>
        </Container>
}