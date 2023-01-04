import {FormInput} from "../FormInput";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addVideo} from "../../redux/slice/videoSlice";
import {AddVideoForm, AddVideoButton} from "./AddVideoBar.styled";
import Notiflix from "notiflix";

export const AddVideoBar = () => {
    const [videoLink, setVideoLink] = useState('');
    const loggedInUserId = useSelector((state) => state.users.loggedInUser.id);

    const dispatch = useDispatch();

    const videoName = Date.now();
    const videoId = videoName;

    function handleButtonClick(e){
        if (e.target.form[0].value !== '') {
            dispatch(addVideo({loggedInUserId, videoName, videoLink, videoId}));
            Notiflix.Notify.success('Video was added successfully');
        }
    }

    function handleFormSubmit(e){
        e.preventDefault();
        e.currentTarget.elements[0].value = '';
    }

    return (
        <AddVideoForm onSubmit={handleFormSubmit}>
            <FormInput labelText="Set the link here" inputType="text" inputName="videoLink" onChange={value => setVideoLink(value)} />
            <AddVideoButton className="AddVideoButton" type="submit" text="Add" onClick={e => handleButtonClick(e)}/>
        </AddVideoForm>
    )
}