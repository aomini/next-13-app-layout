"use client";

import axios from "axios";
import React from "react";

type User = {
  id: string;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
};

const ClientUser = () => {
  const [users, setUsers] = React.useState<Array<User>>([]);

  React.useEffect(() => {
    fetch("/api/users").then(async (resp) => {
      const data: Array<User> = await resp.json();
      setUsers(data);
    });
  }, []);

  return (
    <>
      <h3>Users {users.length}</h3>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.firstName} {user.lastName}
          </li>
        ))}
      </ul>
    </>
  );
};
export default ClientUser;
