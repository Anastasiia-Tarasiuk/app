import styled from "@emotion/styled";

export const StyledSidebar = styled.div`
  padding: 10px;
  position: absolute;
  z-index: 1;
  background-color: gray;
  overflow-y: scroll;
  width: 100%;
  height: 350px;
 
  @media screen and (min-width: 768px) {
    padding: 10px;
    width: 470px;
    bottom: 0;
    height: calc(100% - 41px);
  }

  @media screen and (min-width: 1024px) {
    width: 500px;
    right: -460px;
    transition: right 500ms;
    bottom: 0;
    
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
