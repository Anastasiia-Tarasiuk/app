import {Message} from "../Message/Message";
import {PlayerWrapper, Video} from "./Player.styled";
import { forwardRef } from "react";
import YouTube from "react-youtube";

export const Player = forwardRef((props, ref) => {
    let width = null;
    let height = null;

    if (window.innerWidth >= 768 && window.innerWidth < 1024) {
        width = 620;
        height = 350;
    } else if (window.innerWidth >= 1024) {
        width = 950;
        height = 540;
    } else {
        width = 270;
        height = 150;
    }

    const opts = {
        height,
        width,
        playerVars: {
            autoplay: 1,
        },
    };

    return    <PlayerWrapper>
        {props.name ? <Message text={props.name} /> : <Message text={"Choose video to play"} />}
        {props.src && !props.src.includes("http")
            ? <YouTube ref={ref} videoId={props.src || ""} opts={opts} name="YouTubePlayer"/>
            : <Video ref={ref} controls src={props.src || ""} autoPlay></Video>
        }
    </PlayerWrapper>
});
