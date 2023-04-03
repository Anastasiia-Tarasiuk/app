import styled from "@emotion/styled";

export const HeaderList = styled.ul`
  position: fixed;
  background-color: white;
  z-index: 1;
  width: 100%;
  display: flex;
  font-size: 14px;
  padding: 10px 20px;
  box-shadow: rgba(14, 30, 37, 0.12) 0 2px 4px 0, rgba(14, 30, 37, 0.32) 0 2px 16px 0;
`

export const HeaderItem =  styled.li`
  cursor: pointer;

  :not(:last-child){
    margin-right: 30px;
  }

  :last-child{
    margin-left: auto;
  }

  &:hover{
    color: #ffca2c;
  }
`