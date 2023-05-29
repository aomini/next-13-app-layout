import React from "react";

type User = {
  id: string;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
};

const ServerUser = ({ users }: { users: Array<User> }) => {
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
export default ServerUser;
