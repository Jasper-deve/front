import Ostikko from "./Otiskko";
import Input from "./components/Input";
import SavedNotes from "./components/SavedNotes";
import Note from "./components/Note";
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import Notedata from "./components/Notedata";
import Search from "./components/Search";

function App() {
  const [notes, setNotes] = useState([]);
	useEffect(()=>{
			const search = async () => {
				const notes = await fetch(
					"https://luentomuistiinpano-api.deta.dev/notes/"
				);
				let json = await notes.json();
				console.log(json);
			setNotes(json);
		};
		search();

	},[]);

	const[searchText, setSearchText]= useState("");

	const addNote =(text)=>{
		const timestamp = new Date();
		const newNote ={
			id: nanoid(),
			text: text,
			timestamp: timestamp.toLocaleDateString(),
		}
		const newNotes=[...notes,newNote];
		setNotes(newNotes);
	};

	const deleteNote =(id)=>{
		const newNotes= notes.filter((note)=>note.id!==id);
		setNotes(newNotes);
	}
  return (
    <div>
      <Ostikko></Ostikko>
	  <Search handleSearchNote={setSearchText}></Search>
      <Input></Input>
	  <Notedata></Notedata>
      <SavedNotes
	  notes={notes.filter((note)=>note.text.toLowerCase().includes(searchText))} 
	  handleAddNote={addNote}
	  handleDeleteNote={deleteNote}></SavedNotes>
    </div>
  );
}

export default App;
