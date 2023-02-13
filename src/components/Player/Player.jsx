import {Message} from "../Message";
import { PlayerWrapper, Video, YouTube } from "./Player.styled";

export const Player = ({src, name}) => {

    return (
        <PlayerWrapper>
            {name ? <Message text={name} /> : <Message text={"Choose video to play"} />}
            
            {src && src.includes("www.youtube.com")
                ? <YouTube src={src || ""} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></YouTube>
                : <Video controls src={src || ""} autoPlay></Video>
            }
            
        </PlayerWrapper>
    )
}