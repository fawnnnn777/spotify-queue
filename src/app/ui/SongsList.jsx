import Song from "./Song";
import { DndContext } from "@dnd-kit/core";

export default function SongsList({songs, addSong}){

    return (
        <ul className=" scrollbar-thumb-rounded-full scrollbar scrollbar-thumb-background scrollbar-track-white-300 w-[40rem] h-3/4 overflow-auto">
            {songs.map((song, index)=>{
                return <li><Song addSong={addSong} id={index} key={index} song={song}></Song></li>
            })}
        </ul>
    )
}