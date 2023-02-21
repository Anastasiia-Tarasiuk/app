import {useState} from "react";
import { Icon, PlayButton, ImageWrapper, MovieItem, Title, Tooltip, TitleWrapper, AddButton, ModalContentWrapper} from "./SearchItem.styled";
import { ModalOverlay } from "../ModalOverlay/ModalOverlay";
import {addSearchKey} from "../../redux/slice/searchSlice";
import { Player } from "../Player/Player"
import { useDispatch, useSelector } from "react-redux";
import Notiflix from "notiflix";
import { addVideo } from "../../redux/slice/videoSlice"; 
import { Message } from "../Message";
import { API_KEY, IMAGE_URL, BASE_URL } from "../../variables/variables";
import defaultImage from "../../images/no-image.jpg";
// import placeholderImage from "../../images/coming-soon.webp";

export const SearchItem = ({ title, img, year, movieId, modalSize }) => {
    const [showModal, setShowModal] = useState(false);
    const loggedInUserId = useSelector((state) => state.users.loggedInUser.id);
    const [showTooltip, setShowTooltip] = useState(false)
    let correctYouTubeLink = null;
    let modalWidthAndHeight = null;

    const videoKeyForYouTube = useSelector((state) => state.search.searchKey);
    
    if (videoKeyForYouTube) {
        correctYouTubeLink = `https://www.youtube.com/embed/${videoKeyForYouTube}?autoplay=1&mute=0`;
    }

    const dispatch = useDispatch();
  
    function setModalSize(modalSize) {
        const screenWidth = window.innerWidth;
        const keys = Object.keys(modalSize);
        for (const key of keys) {
            if (key <= screenWidth) {
                modalWidthAndHeight = modalSize[key];
            }
        }
    }

    setModalSize(modalSize) 

    function onPlayButtonClick() {
        const movieLink = `${BASE_URL}/movie/${movieId}/videos?api_key=${API_KEY}&language=en-US`;

        const xhr = new XMLHttpRequest();

        xhr.open('GET', movieLink);

        xhr.send();
        
        xhr.onload = function () {
            if (xhr.status !== 200) {
                console.log(`Помилка ${xhr.status}: ${xhr.statusText}`);
            } else {
                const videos = JSON.parse(xhr.response);
                if (!!videos.results[0]) {
                    const key = videos.results[0].key;
                    dispatch(addSearchKey(key));
                } else {
                    dispatch(addSearchKey(null));
                    console.log("No trailer");
                }
            }
            setShowModal(!showModal);
        }

    }

    function addVideoToFavourites() {
        const correctYouTobeLink = `https://www.youtube.com/embed/${videoKeyForYouTube}?autoplay=1&mute=0`;
        dispatch(addVideo({ loggedInUserId, videoName: `${title + ", " + year}`, videoLink: correctYouTobeLink, videoId: Date.now() }));
        Notiflix.Notify.success('Video was added successfully');
    }

    function renderModalContent(link) {
        if (correctYouTubeLink) {
            return <ModalContentWrapper>
                <Player src={link} name={`${title + ", " + year}`} close={() => setShowModal(!showModal)} />
                <AddButton className="AddVideoToFavouriteButton" type="button" text={"Add to list"} onClick={e => addVideoToFavourites(e)} />
            </ModalContentWrapper>
        } else {
            return <Message text={"Sorry, here is no video"} />
        }
    }

    function onMouseEnter(e) {
        setShowTooltip(true);
    }

    function onMouseLeave() {
        setShowTooltip(false);
    }

    function titileCut(text, limit) {
        if (text.length <= limit + 3) return text;
        
        text = text.slice( 0, limit); 
        return text.trim() + "...";
    }

    return <MovieItem>
        <ImageWrapper>
            <img className="lazy-loaded-image" src={img ? `${IMAGE_URL + img}` : defaultImage} width="300" height="450" alt="btn" />
            <PlayButton onClick={onPlayButtonClick} text={<Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM48 368v32c0 8.8 7.2 16 16 16H96c8.8 0 16-7.2 16-16V368c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16zm368-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V368c0-8.8-7.2-16-16-16H416zM48 240v32c0 8.8 7.2 16 16 16H96c8.8 0 16-7.2 16-16V240c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16zm368-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V240c0-8.8-7.2-16-16-16H416zM48 112v32c0 8.8 7.2 16 16 16H96c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16zM416 96c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H416zM160 128v64c0 17.7 14.3 32 32 32H320c17.7 0 32-14.3 32-32V128c0-17.7-14.3-32-32-32H192c-17.7 0-32 14.3-32 32zm32 160c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32H320c17.7 0 32-14.3 32-32V320c0-17.7-14.3-32-32-32H192z" /></Icon>} />
        </ImageWrapper>
        <TitleWrapper onMouseEnter={e => onMouseEnter(e)} onMouseLeave={e => onMouseLeave(e)}>
            <Title>{titileCut(title, 31)}<span> | </span>{year || "None"}</Title>
            {showTooltip && <Tooltip>{title}</Tooltip>}
        </TitleWrapper>
        <ModalOverlay
            style={modalWidthAndHeight}
            shown={showModal}
            close={() => setShowModal(!showModal)}
            content={renderModalContent(correctYouTubeLink)}
        />
    </MovieItem>
}