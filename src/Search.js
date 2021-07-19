import React from "react";
import { Input, Message } from "semantic-ui-react";
import { useHistory } from "react-router";
import { useState } from "react";

const Search = () => {
  const history = useHistory();
  const [name, setName] = useState("");
  const [error, setError] = useState(undefined);

  const getUser = async (name) => {
    if (!name) return;
    fetch(`https://api.github.com/users/${name}`)
      .then((response) => {
        if (response.status === 404) {
          throw new Error(`404 : User ${name} not found.`);
        }
        if (response.status === 403) {
          throw new Error("API rate exceeded, try again later !");
        }
        return response.json();
      })
      .then((data) => {
        history.push({
          pathname: `/${data.login}`,
          state: { user: data },
        });
      })
      .catch((e) => {
        setError(
          <Message color="red">
            <Message.Header>{e.message}</Message.Header>
          </Message>
        );
      });
  };

  return (
    <div className="search">
      <Input
        action={{
          color: "teal",
          icon: "search",
          labelPosition: "right",
          content: "Search",
          onClick: () => {
            getUser(name);
          },
        }}
        icon="users"
        iconPosition="left"
        placeholder="Search user..."
        size="huge"
        onChange={(e) => {
          setName(e.target.value);
          setError(undefined);
        }}
      />
      {error}
    </div>
  );
};

export default Search;
