import {useNavigate} from "react-router-dom";
import {FooterList, FooterItem} from "./Footer.styled";
import {useRef} from "react";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {current} from "@reduxjs/toolkit";

export const Footer = () => {
    const navigate = useNavigate();
    const href = window.location.pathname;

    function onMainPageClick(){
        if (!href.includes("main")) {
            navigate("../main");
        }
    }

    function onSearchPageClick(){
        if (!href.includes("search")) {
            navigate("../search");
        }
    }

    function onUserPageClick(){
        if (!href.includes("user")) {
            navigate("../user");
        }
    }

    return <FooterList>
        <FooterItem onClick={onMainPageClick}>Main page</FooterItem>
        <FooterItem onClick={onSearchPageClick}>Search page</FooterItem>
        <FooterItem className="page" onClick={onUserPageClick}>User page</FooterItem>
        <FooterItem><a href="https://www.youtube.com/" target="_blank" rel="noreferrer">Visit YouTube</a></FooterItem>
    </FooterList>
}