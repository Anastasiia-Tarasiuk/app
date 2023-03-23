import styled from "@emotion/styled";

export const StyledSidebar = styled.div`
  padding: 10px;
  position: absolute;
  z-index: 1;
  background-color: gray;
  overflow-y: scroll;
  bottom: -310px;
  transition: bottom 500ms;
  width: 100%;
  height: 350px;

  &:hover,
  &:focus {
    bottom: 0;
    transition: bottom 500ms;
  }
 
  @media screen and (min-width: 768px) {
    padding: 10px;
    width: 470px;
    right: -430px;
    top: 0;
    transition: right 500ms;
    height: 100%;

    &:hover,
    &:focus {
      right: 0;
      transition: right 500ms;
    }
  }

  @media screen and (min-width: 1024px) {
    width: 500px;
    right: -460px;
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
