const Note = ({id,text,timestamp,course,handleDeleteNote}) =>{
    return <div className="note">
        <span>{course}</span>
        <span>{text}</span>
        <div className="note-footer"></div>
        <small>{timestamp}</small>
        <p
        role="button"
        tabIndex={0}
        className="delete-btn"
        // onKeyDonw={()=>console.log("keydown")}
        onClick={()=>handleDeleteNote(id)}>[x]</p>

    </div>
}

export default Note;