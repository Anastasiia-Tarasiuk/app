import styled from "@emotion/styled";
import { ButtonComponent } from "../Button";

export const Icon = styled.svg`
  width: 15px;    
`

export const PlayButton = styled(ButtonComponent)`
  position: absolute;
  bottom:0;
  right:0;
`

export const ImageWrapper = styled.div`
  position: relative;
  width: 300px;
`

export const MovieItem = styled.li`
  width: 300px;

  @media screen and (min-width: 768px) {
    margin: 0 16px;
  }

  &:not(:last-child) {
    margin-bottom: 16px;
    
    @media screen and (min-width: 768px) {
      margin-bottom: 0;
    }
  }

  &:not(:nth-last-of-type(-n+2)) {
    @media screen and (min-width: 768px) {
      margin-bottom: 16px;
    }

    @media screen and (min-width: 1024px) {
      margin-bottom: 0;
    }
  }

  &:not(:nth-last-of-type(-n+3)) {
    @media screen and (min-width: 1024px) {
      margin-bottom: 16px;
    }
  }
`

export const Title = styled.p`
  margin: 0; 
  cursor: default; 
`

export const Tooltip = styled.div`
  position: absolute;
  background-color: gray;
  cursor: default; 
  color: white;
  top: 0;
  z-index: 1;
`

export const TitleWrapper = styled.div`
  position: relative;
`