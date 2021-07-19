import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Button, Icon } from "semantic-ui-react";
import Search from "./Search";
import Users from "./Users";

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
          <Link to="/github-codemates">
            <Button animated="fade" size="big">
              <Button.Content visible>
                <Icon name="home" />
              </Button.Content>
              <Button.Content hidden>Home</Button.Content>
            </Button>
          </Link>
        </div>
        <Switch>
          <Route path="/github-codemates" component={Search} exact={true} />
          <Route
            path="/github-codemates/:login"
            component={Users}
            exact={true}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;