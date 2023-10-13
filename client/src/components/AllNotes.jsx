import React, { useState, useEffect } from "react";
import { getNotes, deleteNote } from "../service/api";
import DeleteIcon from "@mui/icons-material/Delete";

function AllNotes() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    getAllNotes();
  }, []);

  const getAllNotes = async () => {
    let response = await getNotes();
    setNotes(response.data);
  };

  const handleDelete = async (id) => {
    await deleteNote(id);
    getAllNotes();
  };

  return (
    <div>
      {notes &&
        notes.map((note) => (
          <div className="note" key={note.noteId}>
            <h1>{note.title}</h1>
            <p>{note.content}</p>
            <button onClick={() => handleDelete(note.noteId)}>
              <DeleteIcon />
            </button>
          </div>
        ))}
    </div>
  );
}

export default AllNotes;
