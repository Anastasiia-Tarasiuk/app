import styled from "@emotion/styled";
import {ButtonComponent} from "../Button";

export const Overlay = styled.div`
  position: fixed;
  top:0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow-y: scroll;
  backdrop-filter: blur(10px);
  z-index: 2;
`

export const Modal = styled.div`
  z-index: 3;
  position: absolute;
  top: 50%; 
  left: 50%; 
  transform: translate(-50%, -50%);
  background-color: gray;  
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  padding: 20px;
  min-width: 300px;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

 @media screen and (min-width: 768px) {
   min-width: 600px;
   min-height: 400px;
 }
`

export const DeleteButton = styled(ButtonComponent)`
  margin-left: 20px;
 `

export const CancelButton = styled(ButtonComponent)`
  margin-left: 20px;  
`