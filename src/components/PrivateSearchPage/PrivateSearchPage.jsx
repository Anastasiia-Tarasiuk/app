import { Message } from "../Message";
import { SharedLayout } from "../SharedLayout/SharedLayout";
import { SearchVideoBar } from "../SearchVideoBar/SearchVideoBar";

export const PrivateSearchPage = () => {

    return (
        <>
            <SharedLayout/>
            <Message text={"Search for videos"} />     
            <SearchVideoBar labelText={"Type here"} buttonText={"Search"}/>
        </>
    )
}