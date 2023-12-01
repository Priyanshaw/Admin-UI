import React from "react";
import { MdDelete } from "react-icons/md";
import { BiSolidEdit } from "react-icons/bi";
import "./UsersTable.css";

export default function UsersTable({
  users,
  handleSelectAllRow,
  handleRowCheckboxChange,
  filteredData,
  selectedRows,
  isAllSelected,
  handleDelete,
  handleEdit,
}) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                checked={isAllSelected}
                onChange={(event) => handleSelectAllRow(event, filteredData)}
              />
            </th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr
              className={`table-row ${
                selectedRows.includes(user.id) ? "selected" : ""
              }`}
              key={user.id}
            >
              <td>
                <input
                  type="checkbox"
                  checked={selectedRows.includes(user.id)}
                  onChange={(event) => handleRowCheckboxChange(event, user.id)}
                />
              </td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td className="action-items">
                <MdDelete onClick={() => handleDelete(user.id)} />
                <BiSolidEdit onClick={() => handleEdit(user)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
