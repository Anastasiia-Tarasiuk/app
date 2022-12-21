import {Button} from "./ModalCloseButton.styled";


export const ModalCloseButton = ({onClick}) => {

//     function onClick() {
//
// console.log('close click')
//
//     }

    return (
        <Button onClick={onClick}>x</Button>
    )
}