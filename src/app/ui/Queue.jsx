import SongsList from "./SongsList"

export default function({queue}){
    return (
        <div className="w-96">
            {queue? 
            <SongsList songs={queue}></SongsList>
             :
             <h1>no queue</h1>}
        </div>
    )
}