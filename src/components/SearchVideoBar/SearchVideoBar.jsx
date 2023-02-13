import { FormInput } from "../FormInput";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addSearchQuery, addSearchKey, saveResponse} from "../../redux/slice/searchSlice";
import { AddVideoForm, SearchVideoButton } from "../SearchVideoBar/SearchVideoBar.styled";
import { ButtonComponent } from "../Button";
import Notiflix from "notiflix";
import {addVideo} from "../../redux/slice/videoSlice";


const API_KEY = 'b19e6b2986fc1ae4c290daa4cefec337';
const BASE_URL = 'https://api.themoviedb.org/3/';
const SEARCH_URL = `${BASE_URL}search/movie`;

export const SearchVideoBar = ({labelText, buttonText}) => {
    const [searchQuery, setSearchQuery] = useState('');
    // let response = null;
    
    const videoKeyForYouTube = useSelector((state) => state.search.searchKey);
    const loggedInUserId = useSelector((state) => state.users.loggedInUser.id);

    const dispatch = useDispatch();

    function handleButtonClick(e){
        if (e.target.form[0].value !== '') {

            apiSearch(searchQuery);
            // getResponse();
            dispatch(addSearchQuery(searchQuery));
    //         Notiflix.Notify.success('Video was added successfully');
        }
    }

    function handleFormSubmit(e){
        e.preventDefault();
        e.currentTarget.elements[0].value = '';
    }

    // function getResponse(data) {
    //     if (data) {
    //         response = data;
    //     }
    // }

    function apiSearch(query, limit = 10, page = 1) {
        const searchLink = `${SEARCH_URL}?api_key=${API_KEY}&page=${page}&query=${query}`;
        const xhr = new XMLHttpRequest();

        xhr.open('GET', searchLink);

        xhr.send();
        
        xhr.onload = function () {
            if (xhr.status !== 200) {
                console.log(`Помилка ${xhr.status}: ${xhr.statusText}`);
            } else {
                const response = JSON.parse(xhr.response);

                // console.log(response.results);
                dispatch(saveResponse(response.results));

                // getResponse(response)
                const movieId = response.results[1].id;
                // console.log(movieId)

                const movieLink = `${BASE_URL}/movie/${movieId}/videos?api_key=${API_KEY}&language=en-US`;

                const xhr2 = new XMLHttpRequest();

                xhr2.open('GET', movieLink);

                xhr2.send();
                
                xhr2.onload = function () {
                    if (xhr2.status !== 200) {
                        console.log(`Помилка ${xhr2.status}: ${xhr2.statusText}`);
                    } else {
                        const videos = JSON.parse(xhr2.response);
                        if (!!videos.results[0]) {
                            const key = videos.results[0].key;
                            dispatch(addSearchKey(key));
                            // console.log(key);
                        } else {
                            console.log("No trailer")
                        }
                    }
                }
            }
        }
    }

    

    /* Button should be moved to each search item */
    function addVideoToFavourites() {
        const correctYouTobeLink = `https://www.youtube.com/embed/${videoKeyForYouTube}?autoplay=1&mute=0`;
        dispatch(addVideo({loggedInUserId, videoName: Date.now(), videoLink: correctYouTobeLink, videoId: Date.now()}));
        Notiflix.Notify.success('Video was added successfully');
    }

    return (
        <AddVideoForm onSubmit={handleFormSubmit}>
            <FormInput labelText={labelText} inputType="text" inputName="searchQuery" onChange={value => setSearchQuery(value)} />
            <SearchVideoButton className="AddVideoButton" type="submit" text={buttonText} onClick={e => handleButtonClick(e)} />
            
            {/* Button should be moved to each search item */}
            <ButtonComponent className="AddVideoToFavouriteButton" type="button" text={"Add to list"} onClick={e => addVideoToFavourites(e)} />
        </AddVideoForm>
    )
}