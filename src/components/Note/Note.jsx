import React from "react";
import "./Note.css"
import { useContext } from "react";
import { NotesContext } from "../../context/notesContext/NotesContext";
import lixo from "./trash.png"
import pincel from "./pincel-grande.png"

export function Note({ title, description, date, id }) { // componente falando sobre oq vai ter nas notas

  const { deleteNote, setEditing, setNote, setIdEdit } = useContext(NotesContext);

  function SubmitToEdit() {
    setEditing(true);
    setNote({ title, description });
    setIdEdit(id);
  }

  return (
    <div className="mainT">
      <h1>{title}</h1>
      <span>{description}</span>
      <div className="Buttons">
        <div className="edit" onClick={() => SubmitToEdit()}><img src={pincel} width={15} alt=""/></div>
        <div className="delete" onClick={() => deleteNote(id)}><img src={lixo} width={15} alt=""/></div>
      </div>
      <div>{date}</div>
    </div>
  );
}

