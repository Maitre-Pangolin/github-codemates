import { div } from "prelude-ls";
import React from "react";
import { useState } from "react";

const Sandbox = () => {
  const [users, setUsers] = useState([]);

  const getData = async () => {
    setUsers([]);
    let searchID = 1;
    let totalData = [];

    for (let i = 0; i < 3; i++) {
      const response = await fetch(
        `https://api.github.com/users?since=${searchID}`
      );
      const data = await response.json();
      console.log(data);
      totalData.push(...data);
      searchID = data[data.length - 1].id;
    }

    setUsers(totalData);
  };

  return (
    <div>
      <button
        onClick={() => {
          getData();
        }}
      >
        Get Users
      </button>
      <h1>{users.length} results</h1>
      {users.map((user) => {
        return (
          <div>
            <h2>{user.login}</h2>
            <img src={user.avatar_url} alt="" width="300px" />
          </div>
        );
      })}
    </div>
  );
};

export default Sandbox;
