import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Guide from "./routes/Guide";
import Home from "./routes/Home";
import Login from "./routes/Login";
import Student from "./routes/Student";
import Teacher from "./routes/Teacher";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/guide">
          <Guide/>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/student">
          <Student/>
        </Route>
        <Route path="/teacher">
          <Teacher/>
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
