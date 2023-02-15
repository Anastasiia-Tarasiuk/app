import { FormInput } from "../FormInput";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {addSearchQuery, saveResponse} from "../../redux/slice/searchSlice";
import { AddVideoForm, SearchVideoButton } from "../SearchVideoBar/SearchVideoBar.styled";
import { API_KEY, SEARCH_URL } from "../../variables/variables";


export const SearchVideoBar = ({labelText, buttonText, page}) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    
    console.log("page", page);
    console.log("currentPage", currentPage);

    const dispatch = useDispatch();

    if (page !== currentPage) {
        setCurrentPage(page);
        apiSearch(searchQuery, currentPage);
        dispatch(addSearchQuery(searchQuery));
    }
  

    function handleButtonClick(e){
        if (e.target.form[0].value !== '') {
            apiSearch(searchQuery, currentPage);
            dispatch(addSearchQuery(searchQuery));
        }
    }

    function handleFormSubmit(e){
        e.preventDefault();
        e.currentTarget.elements[0].value = '';
        setCurrentPage(1);
    }

    function apiSearch(query, page) {
        const searchLink = `${SEARCH_URL}?api_key=${API_KEY}&page=${page}&query=${query}`;
        const xhr = new XMLHttpRequest();

        xhr.open('GET', searchLink);

        xhr.send();
        
        xhr.onload = function () {
            if (xhr.status !== 200) {
                console.log(`Помилка ${xhr.status}: ${xhr.statusText}`);
            } else {
                const response = JSON.parse(xhr.response);
                dispatch(saveResponse(response.results));
            }
        }
    }

    return (
        <AddVideoForm onSubmit={handleFormSubmit}>
            <FormInput labelText={labelText} inputType="text" inputName="searchQuery" onChange={value => setSearchQuery(value)} />
            <SearchVideoButton className="AddVideoButton" type="submit" text={buttonText} onClick={e => handleButtonClick(e)} />
        </AddVideoForm>
    )
}