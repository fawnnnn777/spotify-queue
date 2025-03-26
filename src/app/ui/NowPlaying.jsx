import Song from "./Song";
import { ralewayBold } from "../fonts";

export default function NowPlaying({song}){
    return (
        <div className={`flex flex-col
               p-2 w-3/4 mt-2 
               bg-white/50 drop-shadow-md box-border
               absolute bottom-4
               `}>
                {song? <div className="flex justify-between">
                   <h1 className={`${ralewayBold.className} w-3/4`}>{song.title} </h1>
                   <h2> {song.artist}</h2>
                   </div> : <h1>no song playing</h1> }
               </div>
    )
}