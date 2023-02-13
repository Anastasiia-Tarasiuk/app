import styled from "@emotion/styled";

export const PlayerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;  
`

export const Video = styled.video`
  width: 300px;
  height: 150px;

  @media screen and (min-width: 768px) {
    width: 750px;
    height: 450px;
  }
  
  @media screen and (min-width: 1024px) {
    width: 950px;
    height: 550px;
  }
`

export const YouTube = styled.iframe`
  width: 300px;
  height: 150px;

  @media screen and (min-width: 768px) {
    width: 750px;
    height: 450px;
  }
  
  @media screen and (min-width: 1024px) {
    width: 950px;
    height: 550px;
  }
`