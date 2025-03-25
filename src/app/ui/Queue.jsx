import SongsList from "./SongsList"
import { RxDragHandleHorizontal } from "react-icons/rx";
import { ralewayBold } from "../fonts"
import { DndContext, closestCenter } from "@dnd-kit/core";
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import Sortable from "./Sortable";

export default function({songs}){

    function handleDragEnd(event){
        console.log('drag ended', event);
        
    }

    return (
        <DndContext onDragEnd={handleDragEnd}>
            <SortableContext items={songs} strategy={verticalListSortingStrategy}>
        <ul className="w-68 absolute right-5 top-15 bg-black/25">
            <h1 className={`${ralewayBold.className} text-2xl text-center`}>Queue</h1>
            {songs? 
            songs.map((song)=>{
                return (
                            <Sortable key={song.id} song={song}></Sortable>
                )
            })
             :
             <h1>no queue</h1>}
        </ul>
        </SortableContext>
        </DndContext>
    )
}