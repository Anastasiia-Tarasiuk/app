import styled from "@emotion/styled";

export const StyledSidebar = styled.div`
  position: absolute;
  z-index: 1;
  right: -48vw;
  transition: right 500ms;
  width: 50vw;
  height: 90%;
  background-color: gray;
  padding: 11px;
  
  &:hover,
  &:focus {
    right: 0vw;
    transition: right 500ms;
  }
`

export const Icon = styled.svg`
  width: 25px;
  fill: #ffc107;
  transform: rotate(180deg);
  
`