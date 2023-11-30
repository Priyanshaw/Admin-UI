import React from "react";

export default function UsersTable({users,handleSelectAllRow,handleRowCheckboxChange,filteredData,selectedRows,isAllSelected}) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>
              <input type="checkbox" checked={isAllSelected} onChange={(event)=>handleSelectAllRow(event, filteredData)}/>
            </th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
            {users.map((user)=>(
           <tr key={user.id}>
            <td>
              <input type="checkbox" checked={selectedRows.includes(user.id)} onChange={(event)=>handleRowCheckboxChange(event, user.id)} />
            </td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.role}</td>
            <td>edit, delete</td>
          </tr>
            ))}
          
        </tbody>
      </table>
    </div>
  );
}
