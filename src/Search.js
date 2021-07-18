import React from "react";
import { Input, Button, Message } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import { useState } from "react";

const Search = () => {
  const history = useHistory();
  const [name, setName] = useState("");
  const [notFound, setNotFound] = useState(false);

  const getUser = async (name) => {
    if (!name) return;
    fetch(`https://api.github.com/users/${name}`)
      .then((response) => {
        if (response.status == 404) {
          setNotFound(true);
          throw new Error("test");
        }
        return response.json();
      })
      .then((data) => {
        history.push({ pathname: `/${data.login}`, state: { user: data } });
      })
      .catch((e) => {});
  };

  return (
    <div>
      <Input
        icon="users"
        iconPosition="left"
        placeholder="Search user..."
        size="huge"
        onChange={(e) => {
          setName(e.target.value);
          setNotFound(false);
        }}
      />
      <Link>
        <Button
          size="huge"
          onClick={() => {
            getUser(name);
          }}
        >
          Search
        </Button>
      </Link>
      {notFound ? (
        <Message color="red">
          <Message.Header>User {name} does not exist.</Message.Header>
        </Message>
      ) : undefined}
    </div>
  );
};

export default Search;
