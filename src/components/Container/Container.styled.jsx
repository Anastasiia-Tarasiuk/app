import styled from "@emotion/styled";

export const ContainerWrapper = styled.div`
  position: relative;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - 51px - 125px) ;

  @media screen and (min-width: 1024px) {
    min-height: calc(100vh - 51px - 41px) ;
  }
`