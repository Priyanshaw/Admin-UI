import React from "react";
import "./DeleteSelectedButton.css";
export default function DeleteSelectedButton({ handleDeleteAllSelected }) {
  return (
    <div>
      <div>
        <button className="delete-button" onClick={handleDeleteAllSelected}>
          Delete Selected
        </button>
      </div>
    </div>
  );
}
