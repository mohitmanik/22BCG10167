import { useEffect, useState } from "react";
import React from "react";
const TopUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://20.244.56.144/test/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.slice(0, 5));
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4">Top 5 Users</h1>
      <ul>
        {Object.entries(users).map(([id, name]) => (
          <li key={id}>
            <strong>{name}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}


export default TopUsers