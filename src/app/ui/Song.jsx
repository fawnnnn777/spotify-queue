import { raleway, ralewayBold } from "../fonts"
import { IoIosAddCircleOutline } from "react-icons/io";
import { FaPlay } from "react-icons/fa";



export default function Song({song, id, addSong, handlePlay}){

    return(
        <div className={`flex flex-col
        border-1 border-black p-2 w-9/10 mb-2 
        bg-white/50 drop-shadow-md
            
        `}>
            <div className="flex justify-between">
            <h1 className={`${ralewayBold.className} w-3/4`}>{song.title} </h1>
            <div className="flex  justify-between items-center">
            <FaPlay onClick={()=>handlePlay(song)} className="mr-5 hover:cursor-pointer"/>

            <IoIosAddCircleOutline onClick={()=>addSong(song)} size={24} className={` hover:cursor-pointer 
            hover:text-white`}
            />
            </div>
            </div>
            <h2> {song.artist}</h2>
        </div>
    )
}