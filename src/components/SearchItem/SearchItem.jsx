import {useEffect, useState} from "react";
import { Icon, PlayButton, ImageWrapper, MovieItem, Title, Tooltip, TitleWrapper, AddButton, ModalContentWrapper} from "./SearchItem.styled";
import { ModalOverlay } from "../ModalOverlay/ModalOverlay";
import {addSearchKey} from "../../redux/slice/searchSlice";
import { Player } from "../Player/Player"
import { useDispatch, useSelector } from "react-redux";
import Notiflix from "notiflix";
import { addVideo } from "../../redux/slice/videoSlice"; 
import { Message } from "../Message/Message";
import { API_KEY, IMAGE_URL, BASE_URL } from "../../variables/variables";
import defaultImage from "../../images/no-image.jpg";
import placeholderImage from "../../images/coming-soon.webp";
import { useRef } from "react";

export const SearchItem = ({ title, img, year, movieId }) => {
    const [showModal, setShowModal] = useState(false);
    const loggedInUserId = useSelector((state) => state.users.loggedInUser.id);
    const [showTooltip, setShowTooltip] = useState(false);
    const allVideos = useSelector((state) => state.videos.allVideos);

    const imageRef = useRef(null);
    const [src, setSrc] = useState(placeholderImage);
    const realSrc = img ? `${IMAGE_URL + img}` : defaultImage;

    let correctYouTubeLink = null;

    const videoKeyForYouTube = useSelector((state) => state.search.searchKey);
    
    if (videoKeyForYouTube) {
        correctYouTubeLink = `https://www.youtube.com/embed/${videoKeyForYouTube}?autoplay=1&mute=0`;
    }
    
    useEffect(() => {
        const cb = (entries) => {
            const [entry] = entries;
            if (entry.isIntersecting) {
                setSrc(realSrc);
                observer.unobserve(entry.target);
            } else {
                setSrc(placeholderImage);
            }
        }
        
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 1,
        };
        
        const observer = new IntersectionObserver(cb, options);

        if (imageRef.current) {
            observer.observe(imageRef.current);
        }

        // return () => {
        //     if (imageRef.current) {
        //         observer.unobserve(imageRef.current);
        //     }
        // }

    },[imageRef, realSrc])

    const dispatch = useDispatch();

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
        const thisUserVideos = allVideos.filter(video =>  video.loggedInUserId === loggedInUserId);

        for (const video of thisUserVideos) {
            if (video.videoLink !== correctYouTobeLink) {
                continue;
            } else {
                Notiflix.Notify.failure(`This video is already in your playlist with name ${video.videoName}`);
                return;
            }
        }

        dispatch(addVideo({ loggedInUserId, videoName: `${title + ", " + year}`, videoLink: correctYouTobeLink, videoId: Date.now() }));
        Notiflix.Notify.success('Video was added successfully');
    }

    function renderModalContent(link) {
        if (correctYouTubeLink) {
            return <ModalContentWrapper>
                <Player src={link} name={`${title + ", " + year}`} close={() => setShowModal(!showModal)} />
                <AddButton id="addButton" aria-label="add video to favourites" type="button" text={"Add to list"} onClick={e => addVideoToFavourites(e)} />
            </ModalContentWrapper>
        } else {
            return <Message text={"Sorry, here is no video"} />
        }
    }

    function onMouseEnter() {
        setShowTooltip(true);
    }

    function onMouseLeave() {
        setShowTooltip(false);
    }

    function titleCut(text, limit) {
        if (text.length <= limit + 3) return text;
        
        text = text.slice( 0, limit); 
        return text.trim() + "...";
    }

    return <MovieItem>
        <ImageWrapper>
            <img ref={imageRef} src={src} width="300" height="450" alt="Movie poster"/>
            <PlayButton onClick={onPlayButtonClick} text={<Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM48 368v32c0 8.8 7.2 16 16 16H96c8.8 0 16-7.2 16-16V368c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16zm368-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V368c0-8.8-7.2-16-16-16H416zM48 240v32c0 8.8 7.2 16 16 16H96c8.8 0 16-7.2 16-16V240c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16zm368-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V240c0-8.8-7.2-16-16-16H416zM48 112v32c0 8.8 7.2 16 16 16H96c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16zM416 96c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H416zM160 128v64c0 17.7 14.3 32 32 32H320c17.7 0 32-14.3 32-32V128c0-17.7-14.3-32-32-32H192c-17.7 0-32 14.3-32 32zm32 160c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32H320c17.7 0 32-14.3 32-32V320c0-17.7-14.3-32-32-32H192z" /></Icon>} />
        </ImageWrapper>
        <TitleWrapper onMouseEnter={e => onMouseEnter(e)} onMouseLeave={e => onMouseLeave(e)}>
            <Title>{titleCut(title, 28)}<span> | </span>{year || "None"}</Title>
            {showTooltip && <Tooltip>{title}</Tooltip>}
        </TitleWrapper>
        <ModalOverlay
            shown={showModal}
            close={() => setShowModal(!showModal)}
            content={renderModalContent(correctYouTubeLink)}
        />
    </MovieItem>
}