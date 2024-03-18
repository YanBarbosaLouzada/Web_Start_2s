import React, { createContext, useState } from 'react'
import { mockNotes } from '../../mookData/mockNotes';

// importando funções javascript
import { generateAtualDate } from '../../helpers/generateAtualDate';
import { generateRandomId} from '../../helpers/generateRandomId';



export const NotesContext = createContext(); // falando pro react que vamos crear um contexto


export const NoteProvaider = ({ children }) => { // criando nossos provedores(função) add nota e delete nota
  const [notes, setNotes] = useState([...mockNotes]);
  //criando variaveis para função editar
  const [note, setNote] = useState({title:"",description:""});
  const [isEditing, setEditing] = useState(false);
  const [idEdit, setIdEdit] = useState("")

  const addNote = (title, description) => {
    setNotes([
      ...notes,
      { id: generateRandomId(), description, title, date: generateAtualDate() },
    ]);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  // criando função edit
  const editnote = (id) =>{
    setNotes(
      notes.map((n)=>{
        if(n.id === id){
          return {...note, id: id, data: generateAtualDate()}
        }else{
          return n;
        }
      })
    )
  }

  return (
    <NotesContext.Provider value={{ notes, addNote, deleteNote,note,setNote,isEditing, setEditing, idEdit, setIdEdit, editnote }}>{children}</NotesContext.Provider>
  )
}

