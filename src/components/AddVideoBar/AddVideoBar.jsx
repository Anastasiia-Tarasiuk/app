import {FormInput} from "../FormInput";
import {ButtonComponent} from "../Button";
import {useRef, useState} from "react";
import {VideoBarWrapper} from "./AddVideoBar.styled";
import {useDispatch, useSelector} from "react-redux";
import {addVideo} from "../../redux/slice/videoSlice";

export const AddVideoBar = () => {
    const [videoLink, setVideoLink] = useState('');
    const loggedInUserId = useSelector((state) => state.users.loggedInUser.id);

    const dispatch = useDispatch();

    const videoName = Date.now();
    const videoId = videoName;

    function handleButtonClick(){

        dispatch(addVideo({loggedInUserId, videoName, videoLink, videoId}))
    }

    return (
        <VideoBarWrapper>
            <FormInput labelText="Set the link here" inputType="text" inputName="videoLink" onChange={value => setVideoLink(value)} />
            <ButtonComponent className="AddVideoButton" type="button" text="Add" onClick={handleButtonClick}/>
        </VideoBarWrapper>
    )
}