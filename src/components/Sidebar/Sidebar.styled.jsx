import styled from "@emotion/styled";

export const StyledSidebar = styled.div`
  padding: 10px;
  position: absolute;
  z-index: 2;
  background-color: gray;
  overflow-y: scroll;
  width: 100%;
  height: 350px;
 
  @media screen and (min-width: 768px) {
    padding: 10px;
    width: 470px;
    top: 0;
    height: 100%;
  }

  @media screen and (min-width: 1024px) {
    width: 500px;
    right: -460px;
    transition: right 500ms;
    
    &:hover,
    &:focus {
      right: 0;
      transition: right 500ms;
    }
  }
`

export const Icon = styled.svg`
  width: 25px;
  fill: #ffc107;
  transform: rotate(-90deg);
  padding: 0;
  position: absolute;

  @media screen and (min-width: 768px) {
    transform: rotate(180deg);
  }
`
