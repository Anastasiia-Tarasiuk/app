import { Message } from "../Message";
import { SharedLayout } from "../SharedLayout/SharedLayout";
import { SearchVideoBar } from "../SearchVideoBar/SearchVideoBar";
import { SearchList } from "../SearchList/SearchList";
import { useSelector } from "react-redux";

export const PrivateSearchPage = () => {
    const response = useSelector((state) => state.search.response);
    return (
        <>
            <SharedLayout/>
            <Message text={"Search for videos"} />     
            <SearchVideoBar labelText={"Type here"} buttonText={"Search"} />
            {response && <SearchList items={response} />}
        </>
    )
}