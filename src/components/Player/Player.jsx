import {Message} from "../Message/Message";
import { PlayerWrapper, Video, YouTube } from "./Player.styled";
import { forwardRef } from "react";

// export const Player = forwardRef({src, name}) => {

//     return (
//         <PlayerWrapper>
//             {name ? <Message text={name} /> : <Message text={"Choose video to play"} />}
            
//             {src && src.includes("www.youtube.com")
//                 ? <YouTube src={src || ""} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></YouTube>
//                 : <Video controls src={src || ""} autoPlay></Video>
//             }
            
//         </PlayerWrapper>
//     )
// }

export const Player = forwardRef((props, ref) => (
  
        <PlayerWrapper>
            {props.name ? <Message text={props.name} /> : <Message text={"Choose video to play"} />}
            
            {props.src && props.src.includes("www.youtube.com")
                ? <YouTube ref={ref} src={props.src || ""} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></YouTube>
                : <Video ref={ref} controls src={props.src || ""} autoPlay></Video>
            }
        </PlayerWrapper>
   
));
