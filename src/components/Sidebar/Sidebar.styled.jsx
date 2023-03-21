import styled from "@emotion/styled";

export const StyledSidebar = styled.div`

  @media screen and (max-width: 767px){
    width: 90%;
    right: -81%;
  }

  @media screen and (min-width: 768px) {
    width: 60%;
    right: -56%;
  }

  @media screen and (min-width: 1024px) {
    width: 50%;
    right: -48%;
  }
  
  position: absolute;
  top: 0;
  z-index: 1;
  transition: right 500ms;
  height: 100%;
  background-color: gray;
  overflow-y: scroll;
  overflow-x: hidden;

  &:hover,
  &:focus {
    right: 0;
    transition: right 500ms;
  }
`

export const Icon = styled.svg`
  width: 25px;
  fill: #ffc107;
  transform: rotate(180deg);
  padding: 0;
  position: absolute;
`

