import styled from "@emotion/styled";

export const Overlay = styled.div`
  position: fixed;
  top:0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow-y: scroll;
  background-color: rgba(17, 17, 17, 0.6);
  backdrop-filter: blur(10px);
  z-index: 1;
`


export const Modal = styled.div`
  z-index: 2;
  position: absolute;
  top: 50%; 
  left: 50%; 
  transform: translate(-50%, -50%);
  padding: 200px;
  background-color: gray;  
`
