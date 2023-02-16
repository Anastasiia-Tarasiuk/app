import { Message } from "../Message";
import { SharedLayout } from "../SharedLayout/SharedLayout";
import { SearchVideoBar } from "../SearchVideoBar/SearchVideoBar";
import { SearchList } from "../SearchList/SearchList";
import { useSelector } from "react-redux";
import { ButtonComponent } from "../Button";
import { useState } from "react";

export const PrivateSearchPage = () => {
    const response = useSelector((state) => state.search.response);
    const [currentPage, setCurrentPage] = useState(1);

    function onNextPageButtonClick() {
        setCurrentPage((prev) => {
           return prev + 1;
        })
    }

    function pageReset(page) {
        setCurrentPage(page);
    }

    // console.log('currentPage', currentPage)

    return (
        <div>
            <SharedLayout/>
            <Message text={"Search for videos"} />     
            <SearchVideoBar page={currentPage} labelText={"Type here"} buttonText={"Search"} onClick={e=>pageReset(e)} />
            {response && <SearchList items={response} />}
            <ButtonComponent text={"Next page"} onClick={onNextPageButtonClick} /> 
        </div>
    )
}