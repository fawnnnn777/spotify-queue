'use client'
import { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { mockSongs } from "../data/mock";

export default function SearchBar({search}){

    const [input, setInput] = useState('')
    const [songs, setSongs] = useState(mockSongs)

    useEffect(()=>{
       search(input)
    }, [input])

    return(
        <div className="relative text-l flex justify-center">
            <form className="m-5 flex">
                <FiSearch className="m-2"></FiSearch>
                <input 
                onChange={(e)=>setInput(e.target.value)}
                value={input}
                className="focus:ring-2 focus:ring-blue-500 transition
                w-72 p-1 rounded-2xl drop-shadow-md bg-[#EFE9D5]/60" type="text"></input>
            </form>
            <div>
                
            </div>
        </div>
    )
}