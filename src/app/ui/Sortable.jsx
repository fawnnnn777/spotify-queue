import { useSortable } from "@dnd-kit/sortable";
import {CSS} from "@dnd-kit/utilities"

export default function Sortable({song}){
    const {attributes, listeners, setNodeRef, transform, transition} = useSortable({id: song.id});

    const style = {
        transform: transform ? CSS.Transform.toString(transform) : undefined,
        transition,
      };
    
    return (
        <li 
        ref={setNodeRef}
        style={style}
        {...attributes}
        {...listeners}
        className="bg-white p-2 my-1 rounded cursor-grab"
        >
            {song.title} - {song.artist}
        </li>
    )
}