'use client'
import SearchBar from "./ui/SearchBar";
import { mockSongs } from "./data/mock";
import SongsList from "./ui/SongsList";
import { useState } from "react";
import Queue from "./ui/Queue";
import NowPlaying from "./ui/NowPlaying";

export default function Home() {

  const [songs, setSongs ] = useState(mockSongs)
  const [queue, setQueue] = useState([])

  function search(query){
    if(!query){
      setSongs(mockSongs)
    }

    let filteredSongs = mockSongs.filter((song)=>song.title.toUpperCase().includes(query.toUpperCase()) || song.artist.toUpperCase().includes(query.toUpperCase()))
    setSongs(filteredSongs)
  }

  function addSong(song){
    console.log(song);
    setQueue((prev)=>[
      ...prev,
      song
    ])
    console.log(queue);
    
  }

  return (
    <div className="flex w-screen justify-center">
   <div className="h-screen w-full flex items-center flex-col">
    <SearchBar search={search}></SearchBar>
    <SongsList addSong={addSong} songs={songs}></SongsList>
   </div>
   <Queue songs={queue}></Queue>
   <NowPlaying song={songs[0]}></NowPlaying>
    </div>
  );
}
