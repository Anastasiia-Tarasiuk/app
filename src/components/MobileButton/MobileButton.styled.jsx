import styled from "@emotion/styled";

export const Icon = styled.svg`
  width: 25px;
  fill: #ffc107;
  transform: rotate(-90deg);
  padding: 0;

  @media screen and (min-width: 768px) {
    transform: rotate(180deg);
  }
`

export const IconRotate = styled.svg`
  width: 25px;
  fill: #ffc107;
  transform: rotate(90deg);
  padding: 0;

  @media screen and (min-width: 768px) {
    transform: rotate(0);
  }
`
export const Button = styled.button`
  padding: 10px;   
  background-color: transparent;
  border: none;
`