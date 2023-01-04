import {Message} from "../Message";
import {PlayerWrapper, Video} from "./Player.styled";

export const Player = ({src, name}) => {

    return (
        <PlayerWrapper>
            { name ? <Message text={name}/> : <Message text={"Choose video to play"}/>}
            <Video controls src={src || ""} autoPlay={true}></Video>
        </PlayerWrapper>
    )
}