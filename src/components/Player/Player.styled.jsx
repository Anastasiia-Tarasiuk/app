import styled from "@emotion/styled";

export const PlayerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;  
`

export const Video = styled.video`
    width: 300px;

  @media screen and (min-width: 768px) {
    width: 750px;
  }
  
  @media screen and (min-width: 1024px) {
    width: 1000px;
  }
`