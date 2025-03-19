import Song from "./Song";

export default function SongsList({songs}){
    return (
        <div className="w-86 h-[32rem] overflow-auto ml-20">
            {songs.map((song, index)=>{
                return <Song id={index} key={index} title={song.title} artist={song.artist}></Song>
            })}
        </div>
    )
}