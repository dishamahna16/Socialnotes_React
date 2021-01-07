import logo from "./logo.svg";
import "./App.css";
import Signup from "./Signup.js";
import Login from "./Login.js";
import Addnotes from "./Addnotes.js";
import Notes from "./Notes.js";
import Editnotes from "./editnotes.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/addnotes">
            <Addnotes />
          </Route>
          <Route path="/notes">
            <Notes />
          </Route>
          <Route path="/editnotes">
            <Editnotes />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
