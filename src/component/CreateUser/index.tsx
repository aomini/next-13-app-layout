"use client";

import React from "react";
import axios from "axios";
import { faker } from "@faker-js/faker";

const CreateUser = () => {
  const [loading, setLoading] = React.useState(false);

  const handleClick = async () => {
    setLoading(true);
    try {
      await axios.post("/api/users", {
        email: faker.internet.email(),
        username: faker.internet.userName(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
      });
    } catch {
    } finally {
      setLoading(false);
    }
  };

  return (
    <button onClick={handleClick}>{loading ? `loading` : `Create User`}</button>
  );
};
export default CreateUser;
