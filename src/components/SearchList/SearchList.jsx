import { SearchItem } from "../SearchItem/SearchItem"
import { nanoid } from '@reduxjs/toolkit';

export const SearchList = ({ items }) => {
    
    console.log(items)

    const itemsForRender = items.map(item => {
    // const date = item.createdAt.slice(0, 10).split('-');
    // const year = date[0];
    // const month = date[1];
    // const day = date[2];

    return <SearchItem key={nanoid()} title={item.original_title} />
  })
 
    return <ul children={itemsForRender}></ul>
}


