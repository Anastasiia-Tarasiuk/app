import { Message } from "../Message";
import { SharedLayout } from "../SharedLayout/SharedLayout";
import { SearchVideoBar } from "../SearchVideoBar/SearchVideoBar";
import { SearchList } from "../SearchList/SearchList";
import { useSelector } from "react-redux";
import { ButtonComponent } from "../Button";
import { useDispatch } from "react-redux";
import { apiSearch } from "../../apiSearch/apiSearch";
import { saveResponse } from "../../redux/slice/searchSlice";

let page = 1;

export const PrivateSearchPage =  ({modalSize}) => {
    const response = useSelector((state) => state.search.response);
    const searchQuery = useSelector((state) => state.search.searchQuery);
    const totalPages = useSelector((state) => state.search.totalPages);
    
    const dispatch = useDispatch();

    function onNextPageButtonClick() {
        page = page + 1;
        apiSearch(searchQuery, page).then(res => {
            console.log(res)
            dispatch(saveResponse(res.results));
        });
    }

    function pageReset() {
        page = 1;
    }

    return (
        <div>
            <SharedLayout modalSize={modalSize}/>
            <Message text={"Search for videos"} />     
            <SearchVideoBar labelText={"Type here"} buttonText={"Search"} onClick={e => pageReset(e)} />
            {response && <SearchList items={response} />}
            <ButtonComponent text={"Next page"} onClick={onNextPageButtonClick} />
        </div>
    )
}