'use client'
import SearchBar from "./ui/SearchBar";
import { mockSongs } from "./data/mock";
import SongsList from "./ui/SongsList";
import { useState } from "react";
import Queue from "./ui/Queue";

export default function Home() {

  const [songs, setSongs ] = useState(mockSongs)
  const [queue, setQueue] = useState([])

  function search(query){
    if(!query){
      setSongs(mockSongs)
    }

    let filteredSongs = mockSongs.filter((song)=>song.title.toUpperCase().includes(query.toUpperCase()))
    setSongs(filteredSongs)
  }

  return (
   <div>
    <SearchBar search={search}></SearchBar>
    <SongsList songs={songs}></SongsList>
    <Queue songs={queue}></Queue>
   </div>
  );
}
