import "./App.css";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Button, Icon } from "semantic-ui-react";
import Search from "./Search";
import Users from "./Users";
import RateAPI from "./RateAPI";

function App() {
  return (
    <div className="App">
      <Router>
        <header>
          <h1>
            Github C
            <Icon name="github" size="small" />
            demates
          </h1>
        </header>
        <div className="homeFloat">
          {" "}
          <Link to="/">
            <Button animated="fade" size="big">
              <Button.Content visible>
                <Icon name="home" />
              </Button.Content>
              <Button.Content hidden>Home</Button.Content>
            </Button>
          </Link>
        </div>
        <Switch>
          <Route path="/" component={Search} exact={true} />
          <Route path="/rate" component={RateAPI} exact={true} />
          <Route path="/res/:login" component={Users} exact={true} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
