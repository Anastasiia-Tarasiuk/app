import {ContainerWrapper} from "./Container.styled";
import { forwardRef } from "react";

export const Container = forwardRef((props, ref) => {
    return <ContainerWrapper ref={ref}>{props.children}</ContainerWrapper>
 })