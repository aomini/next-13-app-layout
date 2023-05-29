import ClientUser from "@/component/ClientUser";
import CreateUser from "@/component/CreateUser";
import ServerUser from "@/component/ServerUser";
import axios from "axios";
import Link from "next/link";

type User = {
  id: string;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
};

export const getUsers = async (): Promise<any> => {
  const response = await fetch("http://localhost:3000/api/users", {
    // cache: "no-store",
    // next: { revalidate: 10 },
  });
  return response.json();
};

const Users = async () => {
  const users = await getUsers();

  return (
    <div style={{ padding: "30px" }}>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "30px",
        }}
      >
        <h1>User</h1>
        <Link href="/">Home</Link>
        <CreateUser />
      </nav>
      <hr />
      <div style={{ display: "flex", margin: "50px", gap: "50px" }}>
        <div style={{ flex: 1, border: "1px solid #ccc" }}>
          <h2>Server Response</h2>
          <ServerUser users={users} />
        </div>
        <div style={{ flex: 1, border: "1px solid #ccc" }}>
          <h2>Client Response</h2>
          <ClientUser />
        </div>
      </div>
    </div>
  );
};
export default Users;
