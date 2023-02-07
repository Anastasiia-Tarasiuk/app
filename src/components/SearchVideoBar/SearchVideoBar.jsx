import {FormInput} from "../FormInput";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addVideo} from "../../redux/slice/videoSlice";
import {AddVideoForm, AddVideoButton} from "../AddVideoBar/AddVideoBar.styled";
import Notiflix from "notiflix";

export const SearchVideoBar = ({labelText, buttonText}) => {
    const [videoLink, setVideoLink] = useState('');
    const loggedInUserId = useSelector((state) => state.users.loggedInUser.id);

    const dispatch = useDispatch();

    function handleButtonClick(e){
        if (e.target.form[0].value !== '') {
            dispatch(addVideo({loggedInUserId, videoName: Date.now(), videoLink, videoId: Date.now()}));
            Notiflix.Notify.success('Video was added successfully');
        }
    }

    function handleFormSubmit(e){
        e.preventDefault();
        e.currentTarget.elements[0].value = '';
    }

    return (
        <AddVideoForm onSubmit={handleFormSubmit}>
            <FormInput labelText={labelText} inputType="text" inputName="videoLink" onChange={value => setVideoLink(value)} />
            <AddVideoButton className="AddVideoButton" type="submit" text={buttonText} onClick={e => handleButtonClick(e)}/>
        </AddVideoForm>
    )
}