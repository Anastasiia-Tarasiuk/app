import styled from "@emotion/styled";

export const FooterList = styled.ul`
  padding: 10px 20px;
  display: flex;
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
`
export const FooterItem = styled.li`
  cursor: pointer;

  &:hover{
    color: #ffca2c;
  }
  
  :not(:last-child){
    margin-right: 30px;
  }
`
