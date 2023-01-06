import styled from "@emotion/styled";
import {ButtonComponent} from "../Button";

export const Overlay = styled.div`
  position: fixed;
  top:0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow-y: scroll;
  background-color: rgba(17, 17, 17, 0.6);
  backdrop-filter: blur(10px);
  z-index: 2;
`

export const Modal = styled.div`
  z-index: 3;
  position: absolute;
  top: 50%; 
  left: 50%; 
  transform: translate(-50%, -50%);
  width: 300px;
  height: 300px;
  padding: 100px;
  background-color: gray;  
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;

  @media screen and (min-width: 768px) {
    width: 600px;
    height: 600px;
  }
`

export const DeleteButton = styled(ButtonComponent)`
  margin-left: 20px;
 `

export const CancelButton = styled(ButtonComponent)`
  margin-left: 20px;  
`