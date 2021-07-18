import React from "react";

const Neighbour = (props) => {
  return (
    <div>
      <h3>{props.user.login}</h3>
      <img src={props.user.avatar_url} alt="" width="300px" />
    </div>
  );
};

export default Neighbour;
