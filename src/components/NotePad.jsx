import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNoteSticky } from "@fortawesome/free-solid-svg-icons";
import "./NotePad.css";
import { useState, useEffect } from "react";

const NotePad = () => {
  const [showNote, setShowNote] = useState(false);
  const [notes, setNotes] = useState([]);
  const [newNoteText, setNewNoteText] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("cozyNotes");
    if (saved) {
      setNotes(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cozyNotes", JSON.stringify(notes));
  }, [notes]);

  const handleNoteToggle = () => {
    setShowNote(!showNote);
  };

  const handleAddNote = () => {
    if (newNoteText.trim() !== "") {
      const newNote = {
        id: Date.now(),
        text: newNoteText.trim(),
      };
      setNotes([newNote, ...notes]);
      setNewNoteText("");
    }
  };

  const handleDeleteNote = (id) => {
    const filtered = notes.filter((note) => note.id !== id);
    setNotes(filtered);
  };

  return (
    <div className="notepad-container">
      <button className="notepad-button" onClick={handleNoteToggle}>
        <FontAwesomeIcon icon={faNoteSticky} />
      </button>

      {showNote && (
        <div className="notepad-popup">
          <textarea
            value={newNoteText}
            onChange={(e) => setNewNoteText(e.target.value)}
            placeholder="Write your cozy note..."
          />
          <button className="add-note-button" onClick={handleAddNote}>
            Add Note
          </button>

          <div className="scrollable-notes">
            <div className="notes-list">
              {notes.map((note) => (
                <div key={note.id} className="note-item">
                  <p>{note.text}</p>
                  <button
                    className="delete-note-button"
                    onClick={() => handleDeleteNote(note.id)}
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NotePad;
