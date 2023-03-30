import {StyledSidebar, Icon} from "./Sidebar.styled";
import {VideoList} from "../VideoList/VideoList";
import {useEffect, useRef, useState} from "react";
import {Message} from "../Message/Message";
import {FormInput} from "../FormInput";
import {MobileButton} from "../MobileButton/MobileButton";

export const Sidebar = ({onClick}) => {
    const [over,setOver]=useState(false);
    const [filterValue, setFilterValue] = useState("");
    const [isSideBarOpen, setIsSideBarOpen] = useState(false);

    const refSideBar = useRef();

    useEffect(()=>{
        if (over === false) {
            refSideBar.current.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth",
            });
        }
    },[over])

    function filterVideos(e){
            setFilterValue(e);
    }

    function onMobileButtonClick(){
        if (!refSideBar.current.classList.value.includes("moveSidebarUp")) {
            refSideBar.current.classList.add("moveSidebarUp");
            refSideBar.current.classList.remove("moveSidebarBack");
            setIsSideBarOpen(true);
        } else {
            refSideBar.current.classList.add("moveSidebarBack");
            refSideBar.current.classList.remove("moveSidebarUp");
            setIsSideBarOpen(false);
        }
    }

    return <StyledSidebar className="moveSidebarBack" ref={refSideBar} onMouseOver={()=>setOver(true)}
                          onMouseOut={()=>setOver(false)}>
        {window.innerWidth < 1024 && <MobileButton onClick={onMobileButtonClick} isSideBarOpen={isSideBarOpen}/>}
        {window.innerWidth >= 1024 && !over && <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></Icon>}
        <Message text={'Manage your playlist'}/>
        <form>
            <FormInput labelText={"Type to find your video"} onChange={e=> filterVideos(e)}/>
        </form>
        <VideoList onClick={onClick} filterValue={filterValue} />
    </StyledSidebar>
}