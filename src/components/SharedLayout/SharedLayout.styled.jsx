import styled from "@emotion/styled";
import {ButtonComponent} from "../Button";

export const HeaderWrapper = styled.header`
  display: flex;
  padding: 10px 20px;
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;

  div {
    margin-left: auto;
  }
`

export const ToSearchButton =  styled(ButtonComponent)`
  margin-left: 10px;
  margin-right: auto;
`

export const ToUserMenuButton =  styled(ButtonComponent)`
  margin-right: 10px;
  margin-left: auto;
`

export const Icon = styled.svg`
  width: 15px;    
`