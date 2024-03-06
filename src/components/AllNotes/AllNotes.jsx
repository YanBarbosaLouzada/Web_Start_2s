import React, {useContext} from "react";
import {NotesContext} from '../../context/notesContext/NotesContext'
import { Note } from "../Note/Note";
import "./AllNotes.css";

export function AllNotes() { // componente para exibir todas as notas
  const {notes} = useContext(NotesContext);
  return (
    <div className="AllNotes">
      {notes.map((n) => (
        <Note key={n.id} {...n} />
      ))}
    </div>
  );
  
}

