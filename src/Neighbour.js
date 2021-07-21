import { useState, useEffect } from "react";
import { Card, Image, Icon } from "semantic-ui-react";

const Neighbour = (props) => {
  const urlUser = `https://github-project-backend.herokuapp.com/user/${props.user.login}`;
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch(urlUser)
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, [urlUser]);

  return (
    <div style={{ margin: "20px", width: "300px" }}>
      <Card href={user.html_url} fluid>
        <Image src={props.user.avatar_url} />
        <Card.Content>
          <Card.Header>{props.user.login}</Card.Header>
          <Card.Meta>{user.name}</Card.Meta>
          <Card.Description textAlign="left">
            {user.bio || "No bio"}
          </Card.Description>
        </Card.Content>
        <Card.Content extra textAlign="left">
          <Card.Description>
            <Icon name="github square" />
            {user.public_repos} public repositories
          </Card.Description>

          <Card.Description>
            <Icon name="home" />
            {user.location || "No location"}
          </Card.Description>
          <Card.Description>
            <Icon name="building" />
            {user.company || "No company"}
          </Card.Description>
          <Card.Description>
            <Icon name="users" />
            {user.followers} follower{user.followers > 1 ? "s" : ""}
          </Card.Description>
        </Card.Content>
      </Card>
    </div>
  );
};

export default Neighbour;
