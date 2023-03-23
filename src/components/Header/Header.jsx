
import { addSearchKey, addSearchQuery, saveResponse, setPage, setTotalPages } from "../../redux/slice/searchSlice";
import {toggleLoggedInUser} from "../../redux/slice/userSlice";
import { getCurrentVideo } from "../../redux/slice/videoSlice";
import {useNavigate} from "react-router-dom";
import { useDispatch } from "react-redux";
import {HeaderItem, HeaderList} from "./Header.styled";
import {useEffect} from "react";

export const Header = () => {
    const href = window.location.pathname;
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(()=>{
        const pages = [...document.querySelectorAll(".page")];
            switch (href) {
                case "/main":
                    pages.map(page=> {
                        return page.classList.remove("active");
                    })
                    pages[0].classList.add("active");
                    break;
                case "/search":
                    pages.map(page=> {
                        return page.classList.remove("active");
                    })
                    pages[1].classList.add("active");
                    break;
                case "/user":
                    pages.map(page=> {
                        return page.classList.remove("active");
                    })
                    pages[2].classList.add("active");
                    break;
                default: break;
            }
    },[href])

    function onLogoutButtonClick() {
        navigate("../");
        dispatch(toggleLoggedInUser( null ));
        dispatch(getCurrentVideo({}));
        resetSearchSliceValues();
    }

    function handleToMainButtonClick() {
        if (!href.includes("main")) {
            navigate("../main");
        }
    }

    function handleToSearchButtonClick() {
        if (!href.includes("search")) {
            resetSearchSliceValues();
            navigate("../search");
        }
    }

    function resetSearchSliceValues() {
        dispatch(addSearchQuery(null));
        dispatch(addSearchKey(null));
        dispatch(saveResponse(null));
        dispatch(setTotalPages(null));
        dispatch(setPage(null));
    }

    function onUserMenuButtonClick(){
        if (!href.includes("user")) {
            navigate("../user");
        }
    }

   return  <HeaderList>
        <HeaderItem className="page" onClick={handleToMainButtonClick}>Playlist</HeaderItem>
        <HeaderItem className="page" onClick={handleToSearchButtonClick}>Search</HeaderItem>
        <HeaderItem className="page" onClick={onUserMenuButtonClick}>User</HeaderItem>
        <HeaderItem className="page" onClick={onLogoutButtonClick}>Logout</HeaderItem>
    </HeaderList>
}