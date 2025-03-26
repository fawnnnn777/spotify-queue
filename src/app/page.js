'use client'
import SearchBar from "./ui/SearchBar";
import { mockSongs } from "./data/mock";
import SongsList from "./ui/SongsList";
import { useEffect, useState } from "react";
import Queue from "./ui/Queue";
import NowPlaying from "./ui/NowPlaying";

export default function Home() {

  const [songs, setSongs ] = useState(mockSongs)
  const [queue, setQueue] = useState([])
  const [playing, setPlaying] = useState()

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

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;
  
    const oldIndex = queue.findIndex((song) => song.id === active.id);
    const newIndex = queue.findIndex((song) => song.id === over.id);
    const updatedQueue = [...queue];
    const [movedSong] = updatedQueue.splice(oldIndex, 1);
    updatedQueue.splice(newIndex, 0, movedSong);
    setQueue(updatedQueue);
    console.log(queue);

  };

  function handleQueue(){
    setTimeout(() => {
      console.log(queue.pop());
    }, 2000);
  }

  function handlePlay(song){
    setPlaying(song)
  }

  return (
    <div className="flex w-screen justify-center">
   <div className="h-screen w-full flex items-center flex-col">
    <SearchBar search={search}></SearchBar>
    <SongsList addSong={addSong} songs={songs} handlePlay={handlePlay}></SongsList>
   </div>
   <Queue songs={queue} handleDragEnd={handleDragEnd}></Queue>
   <NowPlaying song={playing}></NowPlaying>
    </div>
  );
}
