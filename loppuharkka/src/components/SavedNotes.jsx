import Note from "./Note";
import NoteAdd from "./NoteAdd";
const SavedNotes =({ notes, handleAddNote, handleDeleteNote })=>{

    return(
        <div>
			<NoteAdd handleAddNote={handleAddNote}></NoteAdd>
            {notes.map((note) => (
				<Note
					id={note.id}
					//course={note.id}
					course={note.name}
					text={note.text}
					timestamp={note.timestamp}
					handleDeleteNote={handleDeleteNote}
				/>
			))}
            </div>
    )
}
export default SavedNotes;