import React from "react";
import { Link } from "react-router-dom";

function NotesPage() {
  return (
    <div>
      <h2>Notes</h2>
      <div>
        <Link to="/notes/misc-notes">Miscellaneous Notes</Link>
      </div>
      <div>
        <Link to="/notes/road-to-react-notes">Road To React Notes</Link>
      </div>
      <div>
        <Link to="/notes/moving-notes">Moving</Link>
      </div>
    </div>
  );
}

export default NotesPage;
