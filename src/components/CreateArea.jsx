import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({ title: "", content: "" });

  function handleChange(event) {
    const { name, value } = event.target;
    setNote(prev => ({ ...prev, [name]: value }));
  }

  function submitNote(event) {
    event.preventDefault(); // Prevent page reload

    // ✅ Check for empty fields
    if (!note.title.trim() && !note.content.trim()) {
      alert("Please fill in at least one field!"); // Optional feedback
      return;
    }

    props.onAdd(note);
    setNote({ title: "", content: "" }); // Reset fields
  }

  return (
    <form>
      <input
        name="title"
        value={note.title}
        onChange={handleChange}
        placeholder="Title"
      />
      <textarea
        name="content"
        value={note.content}
        onChange={handleChange}
        placeholder="Take a note..."
        rows="3"
      />
      <button onClick={submitNote}>Add</button>
    </form>
  );
}

export default CreateArea;
