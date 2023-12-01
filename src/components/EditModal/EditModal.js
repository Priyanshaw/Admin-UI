import React, { useState } from "react";
import "./EditModal.css";

export default function EditModal({ onSave, handleCloseEditModal, user }) {
  const [editedItem, setEditedItem] = useState({ ...user });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedItem((prevItem) => ({ ...prevItem, [name]: value }));
  };
  const handleSaveClick = () => {
    onSave(editedItem);
    handleCloseEditModal();
  };
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Edit Users</h2>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={editedItem.name}
          onChange={handleInputChange}
        />
        <label>Email</label>
        <input
          type="text"
          name="email"
          value={editedItem.email}
          onChange={handleInputChange}
        />
        <label>Role</label>
        <input
          type="text"
          name="role"
          value={editedItem.role}
          onChange={handleInputChange}
        />
        <div className="modal-buttons">
          <button onClick={handleSaveClick}>Save</button>
          <button onClick={handleCloseEditModal}>Cancel</button>
        </div>
      </div>
    </div>
  );
}
