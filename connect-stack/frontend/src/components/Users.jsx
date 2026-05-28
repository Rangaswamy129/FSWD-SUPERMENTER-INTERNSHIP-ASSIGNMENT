import React, { useEffect, useState } from "react";
import API from "../services/api";

function Users() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");

  // FETCH USERS
  const fetchUsers = async () => {
    const res = await API.get("/users");
    setUsers(res.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // ADD USER
  const addUser = async () => {
    await API.post("/users", { name });
    setName("");
    fetchUsers();
  };

  // DELETE USER
  const deleteUser = async (id) => {
  try {
    await API.delete(`/users/${id}`);
    fetchUsers();
  } catch (error) {
    console.error(error);
    alert("Delete failed");
  }
};

  return (
    <div>
      <h2>Users List</h2>

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter name"
      />
      <button onClick={addUser}>Add</button>

      <ul>
       {users.map(u => (
  <li key={u._id}>
    {u.name}
    <button onClick={() => deleteUser(u._id)}>Delete</button>
  </li>
))}
      </ul>
    </div>
  );
}

export default Users;