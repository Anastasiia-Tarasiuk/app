import { Message } from "../../components/Message/Message";
import { SharedLayout } from "../../components/SharedLayout/SharedLayout";
import { SearchVideoBar } from "../../components/SearchVideoBar/SearchVideoBar";
import { SearchList } from "../../components/SearchList/SearchList";
import { useSelector } from "react-redux";
import { ButtonComponent } from "../../components/Button";
import { useDispatch } from "react-redux";
import { apiSearch } from "../../apiSearch/apiSearch";
import { saveResponse, setPage } from "../../redux/slice/searchSlice";
import { useRef } from "react";
// import { useEffect, useState } from "react";

export const PrivateSearchPage =  ({modalSize}) => {
    const response = useSelector((state) => state.search.response);
    const searchQuery = useSelector((state) => state.search.searchQuery);
    const totalPages = useSelector((state) => state.search.totalPages);
    let page = useSelector((state) => state.search.page);

    // console.log(response)

    const refScrollUp = useRef();

    // Подвійний ререндер через response 

    // const [isShown, setIsShown] = useState(false);

    const dispatch = useDispatch();

    // useEffect(() => {
    //     if (page < totalPages) {
    //         setIsShown(true);
    //     } else {
    //         setIsShown(false);
    //     }
    // }, [page, totalPages]);

    function onNextPageButtonClick() {
        scrollToTop();
        setTimeout(() => {
            page = page + 1;
            dispatch(setPage(page));
            apiSearch(searchQuery, page).then(res => {
                dispatch(saveResponse(res.results));
            })
        }, 1000);
    }

    function scrollToTop() {
        refScrollUp.current.scrollIntoView({ behavior: "smooth" });
    }
 
    return (
        <div ref={refScrollUp}>
            <SharedLayout modalSize={modalSize}/>
            <Message text={"Search for videos"} />     
            <SearchVideoBar labelText={"Type here"} buttonText={"Search"} />
            {response ? <SearchList items={response} /> : <Message text={"Type something to search for video"}/>}
            {page < totalPages && <ButtonComponent text={"Next page"} onClick={onNextPageButtonClick} />}
        </div>
    )
}