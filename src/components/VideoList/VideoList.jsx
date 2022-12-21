import {VideoItem} from "../VideoItem/VideoItem";
import {useSelector} from "react-redux";
import {EditVideoItemModal} from "../EditVideoItemModal/EditVideoItemModal";

export const VideoList = () => {
    const allVideosList = useSelector((state) => state.videos.allVideos);
    const loggedInUserId = useSelector((state) => state.users.loggedInUser.id);

    const loggedInUserVideoList = [];

    allVideosList.map(video => {
        if (video.loggedInUserId === loggedInUserId) {
            loggedInUserVideoList.push(video);
        }
    })

    return <ul>
        {loggedInUserVideoList.map(video => <VideoItem key={video.videoId} name={video.videoName} link={video.videoLink} id={video.videoId}/>)}
        <EditVideoItemModal/>
    </ul>
}