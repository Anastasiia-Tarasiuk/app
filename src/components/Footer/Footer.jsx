import {useNavigate} from "react-router-dom";
import {FooterList, FooterItem} from "./Footer.styled";
import {useDispatch} from "react-redux";
import {addSearchKey, addSearchQuery, saveResponse, setPage, setTotalPages} from "../../redux/slice/searchSlice";

export const Footer = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const href = window.location.pathname;

    function resetSearchSliceValues() {
        dispatch(addSearchQuery(null));
        dispatch(addSearchKey(null));
        dispatch(saveResponse(null));
        dispatch(setTotalPages(null));
        dispatch(setPage(null));
    }

    function onMainPageClick(){
        if (!href.includes("main")) {
            navigate("../main");
        }
    }

    function onSearchPageClick(){
        if (!href.includes("search")) {
            resetSearchSliceValues();
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