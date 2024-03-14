import React from "react";
import "./Note.css"

export function Note({title, description, date, id}) { // componente falando sobre oq vai ter nas notas
  return (
    <div className="main">
      <h1>{title}</h1>
      <span>{description}</span>
      <div>{date}</div>
    </div>
  );
}

