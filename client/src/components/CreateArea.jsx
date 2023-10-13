import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";
import { useNavigate } from "react-router-dom";
import { addNote } from "../service/api.js";

function CreateArea(props) {
  const [isExpanded, setExpanded] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setNote({ ...note, [name]: value });
  };

  const submitNote = async () => {
    await addNote(note);
    navigate("/all");
  };

  function handleExpand() {
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded && (
          <input
            name="title"
            onChange={(e) => handleChange(e)}
            value={note.title}
            placeholder="Title"
          />
        )}
        <textarea
          name="content"
          onClick={handleExpand}
          onChange={(e) => handleChange(e)}
          value={note.content}
          placeholder="Take a note..."
          rows={isExpanded ? 2 : 1}
        />
        <Zoom in={isExpanded}>
          <Fab onClick={() => submitNote()}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
