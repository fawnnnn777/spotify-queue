import { raleway, ralewayBold } from "../fonts"
import { IoIosAddCircleOutline } from "react-icons/io";


export default function Song({song, id, addSong}){



    return(
        <div className={`flex flex-col
        border-1 border-black p-2 w-9/10 m-2 
        bg-white/50 drop-shadow-md
        `}>
            <div className="flex justify-between">
            <h1 className={`${ralewayBold.className} w-3/4`}>{song.title} </h1>
            <IoIosAddCircleOutline onClick={()=>addSong(song)} size={24} className={`absolute right-3 top-5 hover:cursor-pointer 
            hover:text-white`}
            />
            </div>
            <h2> {song.artist}</h2>
            <p>{id}</p>
        </div>
    )
}