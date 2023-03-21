import styled from "@emotion/styled";
import {ButtonComponent} from "../Button";

export const UserMenuWrapper = styled.div`
  display: flex;

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