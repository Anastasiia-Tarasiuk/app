import {VideoItem} from "../VideoItem/VideoItem";
import {useSelector} from "react-redux";
import {Message} from "../Message/Message";
import {List} from "./VideoList.styled";

export const VideoList = ({onClick, filterValue}) => {
    const allVideosList = useSelector((state) => state.videos.allVideos);
    const loggedInUserId = useSelector((state) => state.users.loggedInUser.id);

    const loggedInUserVideoList = [];

    if (allVideosList.length > 0) {
        allVideosList.forEach(video => {
            if (video.loggedInUserId === loggedInUserId) {
                loggedInUserVideoList.push(video);
            }
        })
    }

    function renderItems(){
        if (filterValue !== ""){
            const filteredVideos = loggedInUserVideoList.filter(video => video.videoName.toString().toLowerCase().includes(filterValue));
            if (filteredVideos.length > 0) {
                return  filteredVideos.map(video => <VideoItem onClick={onClick} key={video.videoId} name={video.videoName} link={video.videoLink} id={video.videoId}/>);
            } else {
                return <Message text={`No videos with ${filterValue}`}/>
            }
        } else {
            return loggedInUserVideoList.map(video => <VideoItem onClick={onClick} key={video.videoId} name={video.videoName} link={video.videoLink} id={video.videoId}/>);
        }
    }

    return <>
        {
            loggedInUserVideoList.length > 0
                ? <List>{renderItems()}</List>
                : <Message text={'Your playlist is empty. Add some links'}/>
        }
    </>

}