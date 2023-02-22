import {useState, useEffect, useRef} from "react";
import {Icon, Menu, Wrapper, MenuItem} from "./UserMenu.styled";
import {ButtonComponent} from "../Button";
import {RenameUserModalContent} from "../RenameUserModalContent/RenameUserModalContent";
import {SettingsModalContent} from "../SettingsModalContent/SettingsModalContent";
import { ModalOverlay } from "../ModalOverlay/ModalOverlay";


export const UserMenu = ({modalSize}) => {
    const [isShown, setIsShown] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [showRenameContent, setShowRenameContent] = useState(true);

    const ref = useRef(null);

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isShown]);

    function handleClickOutside(e){
        if (!ref.current.contains(e.target)) {
            setIsShown(false);
        }
    }

    function onUserMenuButtonClick(){
       setIsShown(!isShown);
    }

    function onMenuClick(e){
        setIsShown(false);

        if (e.target.dataset.name === "Rename") {
            setShowModal(true);
            setShowRenameContent(true);
        }

        if (e.target.dataset.name === "Settings") {
            setShowModal(true);
            setShowRenameContent(false);
        }
    }

    return <Wrapper ref={ref}>
        <ButtonComponent id="userMenu" aria-label="user menu" type="button" onClick={onUserMenuButtonClick}
            text={<Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M272 304h-96C78.8 304 0 382.8 0 480c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32C448 382.8 369.2 304 272 304zM48.99 464C56.89 400.9 110.8 352 176 352h96c65.16 0 119.1 48.95 127 112H48.99zM224 256c70.69 0 128-57.31 128-128c0-70.69-57.31-128-128-128S96 57.31 96 128C96 198.7 153.3 256 224 256zM224 48c44.11 0 80 35.89 80 80c0 44.11-35.89 80-80 80S144 172.1 144 128C144 83.89 179.9 48 224 48z"/>
                </Icon>}/>
        {isShown && <Menu className="menu" onClick={e => onMenuClick(e)}>
            <MenuItem data-name="Rename">Rename</MenuItem>
            <MenuItem data-name="Settings">Settings</MenuItem>
        </Menu>}
        <ModalOverlay style={modalSize} shown={showModal} close={() => setShowModal(!showModal)} content={showRenameContent ? <RenameUserModalContent close={() => setShowModal(!showModal)} /> : <SettingsModalContent close={() => setShowModal(!showModal)} />}/>
        </Wrapper>
}