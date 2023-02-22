import { Message } from "../Message";
import { SharedLayout } from "../SharedLayout/SharedLayout";
import { SearchVideoBar } from "../SearchVideoBar/SearchVideoBar";
import { SearchList } from "../SearchList/SearchList";
import { useSelector } from "react-redux";
import { ButtonComponent } from "../Button";
import { useDispatch } from "react-redux";
import { apiSearch } from "../../apiSearch/apiSearch";
import { saveResponse, setPage } from "../../redux/slice/searchSlice";
// import { useState } from "react";

export const PrivateSearchPage =  ({modalSize}) => {
    const response = useSelector((state) => state.search.response);
    const searchQuery = useSelector((state) => state.search.searchQuery);
    const totalPages = useSelector((state) => state.search.totalPages);
    let page = useSelector((state) => state.search.page);

    // const [isShown, setIsShown] = useState(false);
    // console.log(page)
    // console.log(totalPages)
    // // if (page + 1 <= totalPages) {
    // //     setIsShown(true)
    // // }

    // console.log(isShown)

    const dispatch = useDispatch();

    function onNextPageButtonClick() {
        page = page + 1;
        dispatch(setPage(page));
        apiSearch(searchQuery, page).then(res => {
            // console.log(res)
            dispatch(saveResponse(res.results));
        });
    }

    return (
        <div>
            <SharedLayout modalSize={modalSize}/>
            <Message text={"Search for videos"} />     
            <SearchVideoBar labelText={"Type here"} buttonText={"Search"} />
            {response && <SearchList items={response} />}
            <ButtonComponent text={"Next page"} onClick={onNextPageButtonClick} />
        </div>
    )
}