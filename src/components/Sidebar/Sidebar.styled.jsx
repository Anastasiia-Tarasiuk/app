import styled from "@emotion/styled";

export const StyledSidebar = styled.div`
  position: absolute;
  z-index: 1;
  right: -48%;
  transition: right 500ms;
  width: 50%;
  height: 90%;
  background-color: gray;
  padding: 10px;
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