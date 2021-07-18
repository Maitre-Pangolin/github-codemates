import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Redirect, useHistory } from "react-router";
import { Button, Icon } from "semantic-ui-react";
import Neighbour from "./Neighbour";

const Users = (props) => {
  const history = useHistory();
  //const [user, setUser] = useState({});
  const user = props.location.state.user;
  const [neighbours, setNeighbours] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [page, setPage] = useState(1);
  const perPage = 40;
  //location.state.user

  useEffect(() => {
    if (!props.location.state) {
      history.push("/");
    } else {
      //setUser(props.location.state.user);
      //const userCreation = props.location.state.user.created_at;
      const dateFrom = new Date(props.location.state.user.created_at);
      /*const dateTo = new Date(dateFrom.getTime());
      dateTo.setDate(dateTo.getDate() + 1);
      console.log("Date 0", dateFrom.);
      console.log("Date 1", dateTo);*/
      fetch(
        `https://api.github.com/search/users?q=created:${dateFrom
          .toISOString()
          .slice(0, -14)}..${dateFrom
          .toISOString()
          .slice(0, -14)} &per_page=40&page=${page}`
      )
        .then((response) => response.json())

        .then((data) => {
          console.log(data);
          setNeighbours(data.items);
          setTotalResults(data.total_count);
        });
    }
  }, [page]);

  //const incrementPage

  return (
    <div>
      <h2>
        Hi <span style={{ color: "red" }}>{user.login}</span> ! Meet your{" "}
        {totalResults} codemates.
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
