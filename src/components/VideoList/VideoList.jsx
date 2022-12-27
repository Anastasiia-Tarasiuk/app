import {VideoItem} from "../VideoItem/VideoItem";
import {useSelector} from "react-redux";
import {Message} from "../Message";

export const VideoList = () => {
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

    return <>
        <Message text={'Manage your play list'}/>
        {
            loggedInUserVideoList.length > 0
                ? <ul>
                     {loggedInUserVideoList.map(video => <VideoItem key={video.videoId} name={video.videoName} link={video.videoLink} id={video.videoId}/>)}
                </ul>
                : <Message text={'Your playlist is empty. Add some links'}/>
        }
    </>

}