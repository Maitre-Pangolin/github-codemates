import { Card, Image } from "semantic-ui-react";

const Neighbour = (props) => {
  const user = props.user;

  /*useEffect(() => {
    fetch(urlUser)
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, [urlUser]);*/

  return (
    <div style={{ margin: "20px", width: "300px" }}>
      <Card href={user.html_url} fluid>
        <Image src={user.avatar_url} />
        <Card.Content>
          <Card.Header>{user.login}</Card.Header>
        </Card.Content>
      </Card>
    </div>
  );
};

export default Neighbour;
