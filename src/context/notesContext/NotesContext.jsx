import React, { createContext, useState } from 'react'
import { mockNotes } from '../../mookData/mockNotes';

// importando funções javascript
import { generateAtualDate } from '../../helpers/generateAtualDate';
import { generateRandomId} from '../../helpers/generateRandomId';



export const NotesContext = createContext(); // falando pro react que vamos crear um contexto


export const NoteProvaider = ({ children }) => { // criando nossos provedores(função) add nota e delete nota
  const [notes, setNotes] = useState([...mockNotes]);

  const addNote = (title, description) => {
    setNotes([
      ...notes,
      { id: generateRandomId(), description, title, date: generateAtualDate() },
    ]);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };



  return (
    <NotesContext.Provider value={{ notes, addNote, deleteNote }}>{children}</NotesContext.Provider>
  )
}

