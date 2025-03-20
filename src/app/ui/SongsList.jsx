import Song from "./Song";

export default function SongsList({songs, addSong}){
    return (
        <div className="w-86 h-[32rem] overflow-auto ml-20">
            {songs.map((song, index)=>{
                return <Song addSong={addSong} id={index} key={index} song={song}></Song>
            })}
        </div>
    )
}