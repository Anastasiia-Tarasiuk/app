import styled from "@emotion/styled";

export const StyledSidebar = styled.div`
  position: absolute;
  right: -47vw;
  transition: right 500ms;
  width: 50vw;
  height: 88%;
  background-color: gray;
  
  &:hover,
  &:focus {
    right: 0vw;
    transition: right 500ms;
  }
`
