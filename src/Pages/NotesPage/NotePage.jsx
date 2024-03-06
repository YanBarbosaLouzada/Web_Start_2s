import React from 'react'
import {NoteProvaider} from '../../context/notesContext/NotesContext'
import {FormNote} from '../../components/NoteForm/FormNote.jsx'
import {AllNotes} from '../../components/AllNotes/AllNotes.jsx'
import "./NotePage.css"
function NotePage() {
  return (
   <NoteProvaider>
    <div className='notesPageContainer'>
      <FormNote/>
      <AllNotes/>
    </div>
   </NoteProvaider> 
  )
}

export default NotePage 