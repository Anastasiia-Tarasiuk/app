import { SearchItem } from "../SearchItem/SearchItem"
import { nanoid } from '@reduxjs/toolkit';
import { MovieList } from "./SearchList.styled";
import { VIDEO_MODAL_SIZE } from "../../variables/variables";


export const SearchList = ({ items }) => {
  const itemsForRender = items.map(item => {
    return <SearchItem modalSize={VIDEO_MODAL_SIZE} key={nanoid()} title={item.title} img={item.poster_path} year={item.release_date.slice(0, 4)} movieId={item.id} />
  })
  return <MovieList>{itemsForRender}</MovieList>
}


