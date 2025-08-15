// src/components/NoteForm.jsx
import React, { useState } from 'react';

function NoteForm({ onAddNote }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the page from reloading on form submission
    if (!title || !content) {
      alert('Please fill in both title and content!');
      return;
    }
    // Pass the new note object up to the App component
    onAddNote({ title, content });
    // Clear the form fields
    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit} className="note-form">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Take a note..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
      <button type="submit">Add Note 📝</button>
    </form>
  );
}

export default NoteForm;