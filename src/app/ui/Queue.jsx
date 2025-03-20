import SongsList from "./SongsList"

export default function({songs}){
    return (
        <div className="w-96 absolute right-25 top-15 border-2 border-black">
            {songs? 
            <SongsList songs={songs}></SongsList>
             :
             <h1>no queue</h1>}
        </div>
    )
}