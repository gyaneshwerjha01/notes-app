// src/App.jsx
import React, { useState, useEffect } from 'react';
import NoteForm from './components/NoteForm';
import Note from './components/Note';
import './App.css'; // Import our new styles

function App() {
  // State to hold the array of notes
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const savedNotes = localStorage.getItem('notes');
    if (savedNotes) {
      setNotes(JSON.parse(savedNotes));
    }
  }, []); // The empty array [] means this effect runs only once on mount

  // Save notes to local storage whenever the notes state changes
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]); // This effect runs whenever the 'notes' array changes

  // Function to add a new note
  const addNote = (newNote) => {
    const noteWithId = { ...newNote, id: Date.now() }; // Add a unique ID
    setNotes([...notes, noteWithId]);
  };

  // Function to delete a note by its ID
  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <div className="app-container">  {/* <-- THIS IS THE CRUCIAL LINE! */}
      <header>
        <h1>My Notes App 🚀</h1>
      </header>
      <main>
        <NoteForm onAddNote={addNote} />
        <div className="notes-grid">
          {notes.map((note) => (
            <Note key={note.id} note={note} onDelete={deleteNote} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;