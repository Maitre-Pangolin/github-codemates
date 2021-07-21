import { useState, useEffect } from "react";
import { Button, Icon, Message } from "semantic-ui-react";
import Neighbour from "./Neighbour";

const Users = (props) => {
  const [user, setUser] = useState({});
  const [neighbours, setNeighbours] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(undefined);

  const perPage = 30;
  const login = props.match.params.login;

  const getNeighbours = async (user) => {
    const dateFrom = new Date(user.created_at);
    const url = `https://api.github.com/search/users?q=created:${dateFrom
      .toISOString()
      .slice(0, -14)}..${dateFrom
      .toISOString()
      .slice(0, -14)}&per_page=${perPage}&page=${page}`;
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setNeighbours(data.items);
        setTotalResults(data.total_count);
      });
  };

  useEffect(() => {
    if (!props.location.state) {
      fetch(`https://api.github.com/users/${login}`)
        .then((response) => {
          if (response.status === 404)
            throw new Error(`404 : User ${login} not found.`);
          if (response.status === 403) throw new Error("API rate exceeded");
          return response.json();
        })
        .then((user) => {
          setUser(user);
          getNeighbours(user);
        })
        .catch((e) =>
          setError(
            <Message color="red">
              <Message.Header>{e.message}</Message.Header>
            </Message>
          )
        );
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

  if (error) {
    return error;
  }

  if (user)
    return (
      <div>
        <h2>
          Hi <span style={{ color: "teal" }}>{user.login}</span> ! You created
          your github account on{" "}
          <span style={{ color: "teal" }}>{formatDate(user.created_at)}</span>,
          meet your {totalResults} codemates.
        </h2>
        <Button
          icon
          labelPosition="left"
          disabled={page === 1 ? true : false}
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
          <Neighbour key={user.id} user={user}></Neighbour>
          {neighbours.map((n) => (
            <Neighbour key={n.id} user={n}></Neighbour>
          ))}
        </div>
        <Button
          icon
          labelPosition="left"
          disabled={page === 1 ? true : false}
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
      </div>
    );
  return undefined;
};

export default Users;
