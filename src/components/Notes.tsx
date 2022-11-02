import React from "react";
import { Link } from "react-router-dom";

function NotesPage() {
  return (
    <div className="container">
      <h2>Notes</h2>
      <div className="text-xl">
        <Link to="/notes/misc-notes">Miscellaneous Notes</Link>
      </div>
      <div className="text-xl">
        <Link to="/notes/road-to-react-notes">Road To React Notes</Link>
      </div>
      <div className="text-xl">
        <Link to="/notes/moving-notes">Moving</Link>
      </div>
    </div>
  );
}

export default NotesPage;
