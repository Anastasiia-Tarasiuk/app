import {Message} from "../Message";
import {PlayerWrapper} from "./Player.styled";

export const Player = ({src, name}) => {

    return (
        <PlayerWrapper>
            { name ? <Message text={name}/> : <Message text={"Choose video to play"}/>}
            <video width="1400" height="800" controls src={src || ""} autoPlay={true}></video>
        </PlayerWrapper>

    )
}