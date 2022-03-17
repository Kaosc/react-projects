import React from "react"
import Sidebar from "./components/Sidebar"
import Editor from "./components/Editor"
// import { data } from "./data"
import Split from "react-split"
import {nanoid} from "nanoid"
import "./style.css"

export default function App() {

    const [notes, setNotes] = React.useState(() => JSON.parse(localStorage.getItem("notes")) || [])
    const [currentNoteId, setCurrentNoteId] = React.useState(
        (notes[0] && notes[0].id) || ""
    )
    
    // EVERY TIME NOTES CHANGES THIS EFFECT WILL BE RUN AND WILL SAVE THE CURRENT NOTE TO LOCAL STORAGE
    // THE CHANGE STATION DEPENDS THE NOTES. TRIGGER --- > CHANGING NOTES
    React.useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes))
    }, [notes])

    function createNewNote() {
        const newNote = {
            id: nanoid(),
            body: "# Type your markdown note's title here"
        }
        setNotes(prevNotes => [newNote, ...prevNotes])
        setCurrentNoteId(newNote.id)
    }
    
    function findCurrentNote() {
        return notes.find(note => {
            return note.id === currentNoteId
        }) || notes[0]
    }
    
    function updateNote(text) {
        setNotes(oldNotes => oldNotes.map(oldNote => {
            return oldNote.id === currentNoteId ? { ...oldNote, body: text } : oldNote
        }))
        
        // function that I made
        moveNoteToTop()

        // From Scrimba (Creating new empty array and then if the currently edited note id mathces the
                        //  note in new array we are creating its shifting that note to begging of the 
                        // list and the pushing other notes to list)

            // Put the most recently-modified note at the top

            // setNotes(oldNotes => {
            //     const newArray = []
            //     for(let i = 0; i < oldNotes.length; i++) {
            //         const oldNote = oldNotes[i]
            //         if(oldNote.id === currentNoteId) {
            //             newArray.unshift({ ...oldNote, body: text })
            //         } else {
            //             newArray.push(oldNote)
            //         }
            //     }
            //     return newArray
            // })
    }

    /**
     * Challenge: complete and implement the deleteNote function
     * 
     * Hints: 
     * 1. What array method can be used to return a new
     *    array that has filtered out an item based 
     *    on a condition?
     * 2. Notice the parameters being based to the function
     *    and think about how both of those parameters
     *    can be passed in during the onClick event handler
     */

    function deleteNote(event, noteId) {
        event.stopPropagation()
        // let indexOfNote = notes.findIndex(note => note.id === noteId)
        setNotes(oldNotes => {
            const newArray = []
            for(let i = 0; i < oldNotes.length; i++) {
                const oldNote = oldNotes[i]
                if(oldNote.id === noteId) {
                    console.log("Deleted")
                } else {
                    newArray.push(oldNote)
                }
            }
            return newArray
        })

        // FROM SCRIMBA
            // setNotes(oldNotes => oldNotes.filter(note => note.id !== noteId))
    }
    
    function moveNoteToTop(){
        let selectedNoteIndex = notes.indexOf(findCurrentNote())
        let currentNoteData = notes[selectedNoteIndex]
        notes.splice(selectedNoteIndex, 1)
        notes.unshift(currentNoteData)
    }

    return (
        <main>
        {
            notes.length > 0 
            ?
            <Split 
                sizes={[30, 70]} 
                direction="horizontal" 
                className="split"
            >
                <Sidebar
                    notes={notes}
                    currentNote={findCurrentNote()}
                    setCurrentNoteId={setCurrentNoteId}
                    newNote={createNewNote}
                    deleteNote={deleteNote}
                />
                {
                    currentNoteId && 
                    notes.length > 0 &&
                    <Editor 
                        currentNote={findCurrentNote()} 
                        updateNote={updateNote} 
                    />
                }
            </Split>
            :
            <div className="no-notes">
                <h1>You have no notes</h1>
                <button 
                    className="first-note" 
                    onClick={createNewNote}
                >
                    Create one now
                </button>
            </div>
            
        }
        </main>
    )
}
