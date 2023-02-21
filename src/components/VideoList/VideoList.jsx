import {VideoItem} from "../VideoItem/VideoItem";
import {useSelector} from "react-redux";
import {Message} from "../Message";
import {List} from "./VideoList.styled";

export const VideoList = ({modalSize}) => {
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
                ? <List>
                    {loggedInUserVideoList.map(video => <VideoItem modalSize={modalSize} key={video.videoId} name={video.videoName} link={video.videoLink} id={video.videoId}/>)}
                </List>
                : <Message text={'Your playlist is empty. Add some links'}/>
        }
    </>

}