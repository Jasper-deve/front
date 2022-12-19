import { useState } from "react";

const NoteAdd =({handleAddNote})=>{
    const [noteText, setNoteText] = useState("");


    const handleChange=(event)=>{
        setNoteText(event.target.value);
    };
    const handeSaveClick= ()=>{
        if(noteText.trim().length >0){
            handleAddNote(noteText);
            setNoteText("");
        }
    }
    return(
        <div>
            <textarea 
            cols="10"
            rows="8" 
            placeholder="Type to add a note"
            value={noteText}
            onChange={handleChange}
            ></textarea>
            <div>
                <button 
                onClick={handeSaveClick}>
                    Save
                </button>
                </div>

        </div>
    );
};
export default NoteAdd;