import { FormInput } from "../FormInput";
import {useDispatch} from "react-redux";
import {addSearchQuery, saveResponse, setPage, setTotalPages} from "../../redux/slice/searchSlice";
import { AddVideoForm, SearchVideoButton } from "../SearchVideoBar/SearchVideoBar.styled";
import { apiSearch } from "../../apiSearch/apiSearch";
import Notiflix from "notiflix";

export const SearchVideoBar = ({ labelText, buttonText }) => {

    let searchQuery = "";

    const dispatch = useDispatch();

    function handleButtonClick(e){
        if (e.target.form[0].value !== '') {
            apiSearch(searchQuery, 1).then(res => {
                if (res.results.length <= 0) { 
                    dispatch(saveResponse(null));
                    dispatch(setTotalPages(null));
                    dispatch(setPage(null));
                    Notiflix.Notify.failure(`No much for ${searchQuery}`);
                } else {
                    dispatch(saveResponse(res.results));
                    dispatch(setTotalPages(res.total_pages));
                    dispatch(setPage(1));
                }
            });
            dispatch(addSearchQuery(searchQuery));
        }
    }

    function handleFormSubmit(e){
        e.preventDefault();
        e.currentTarget.elements[0].value = '';         
    }

    function setSearchQuery(value) {
        searchQuery = value;
    }

    return (
        <AddVideoForm onSubmit={handleFormSubmit}>
            <FormInput labelText={labelText} inputType="text" inputName="searchQuery" onChange={value => setSearchQuery(value)} />
            <SearchVideoButton className="AddVideoButton" type="submit" text={buttonText} onClick={e => handleButtonClick(e)} />
        </AddVideoForm>
    )
}