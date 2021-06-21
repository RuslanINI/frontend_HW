import React from "react";
export const Notes = ({ notes, onRemove }) => {
  <ul class="list-group">
    {notes.map((note) => (
      <li key={note.id} className="list-group-item notes">
        <span className="note-title">{note.title}</span>
        <span>{note.price}</span>
        <button
          type="button"
          class="btn btn-danger btn-sm"
          onClick={() => onRemove(note.id)}
        >
          &times;
        </button>
      </li>
    ))}
  </ul>;
};
