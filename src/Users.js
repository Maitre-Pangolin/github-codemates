import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Redirect, useHistory } from "react-router";
import { Button, Icon, Message } from "semantic-ui-react";
import Neighbour from "./Neighbour";

const Users = (props) => {
  const history = useHistory();
  const [user, setUser] = useState({});
  //const user = props.location.state ? props.location.state.user : undefined;
  const [neighbours, setNeighbours] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [page, setPage] = useState(1);
  const [notFound, setNotFound] = useState(false);
  const perPage = 40;
  const login = props.match.params.login;
  //location.state.user

  const getNeighbours = async (user) => {
    const dateFrom = new Date(user.created_at);
    fetch(
      `https://api.github.com/search/users?q=created:${dateFrom
        .toISOString()
        .slice(0, -14)}..${dateFrom
        .toISOString()
        .slice(0, -14)} &per_page=40&page=${page}`
    )
      .then((response) => response.json())
      .then((data) => {
        setNeighbours(data.items);
        setTotalResults(data.total_count);
      });
  };

  useEffect(() => {
    if (!props.location.state) {
      //history.push("/");

      fetch(`https://api.github.com/users/${login}`)
        .then((response) => {
          if (response.status == 404) {
            setNotFound(true);
            throw new Error("Not found");
          }
          return response.json();
        })
        .then((user) => {
          setUser(user);
          getNeighbours(user);
        })
        .catch((e) => console.log(e));
    } else {
      const user = props.location.state.user;
      setUser(user);
      getNeighbours(user);
    }
  }, [page]);

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toDateString();
  };

  if (notFound) {
    return (
      <div>
        {" "}
        <Message color="red">
          <Message.Header>User {login} does not exist.</Message.Header>
        </Message>
      </div>
    );
  }

  return (
    <div>
      <h2>
        Hi <span style={{ color: "red" }}>{user.login}</span> ! You created your
        github account on{" "}
        <span style={{ color: "red" }}>{formatDate(user.created_at)}</span>,
        meet your {totalResults} codemates.
      </h2>
      <Button
        icon
        labelPosition="left"
        disabled={page == 1 ? true : false}
        onClick={() => {
          setPage(page - 1);
        }}
      >
        Previous
        <Icon name="left arrow" />
      </Button>
      <Button
        icon
        labelPosition="right"
        disabled={perPage * page > totalResults ? true : false}
        onClick={() => {
          setPage(page + 1);
        }}
      >
        Next
        <Icon name="right arrow" />
      </Button>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
        }}
      >
        {neighbours.map((n) => (
          <Neighbour key={n.id} user={n}></Neighbour>
        ))}
      </div>
    </div>
  );
};

export default Users;
