import styled from "@emotion/styled";

export const FooterWrapper = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
`

export const FooterList = styled.ul`
  display: flex;
`

export const FooterItem = styled.li`
  :first-of-type{
    color: #ffc107;
  }
  
  :not(:first-of-type) {
    cursor: pointer;

    &:hover{
      color: #ffca2c;
    }
  }
  
  :not(:last-child){
    margin-right: 30px;
  }
`
