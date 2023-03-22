import styled from "@emotion/styled";

export const FooterWrapper = styled.footer`
  padding: 10px 20px;
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
  display: flex;
  justify-content: space-between;
`

export const FooterList = styled.ul`
  display: flex;
  flex-direction: column;
  font-size: 14px;

  @media screen and (min-width: 1024px) {
    flex-direction: row;
  }
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
  
  @media screen and (min-width: 1024px) {
    :not(:last-child){
      margin-right: 30px;
    }
  }
`
