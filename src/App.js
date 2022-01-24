import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Guide from "./routes/Guide";
import Home from "./routes/Home";
import Login from "./routes/Login";
import Signup from "./routes/Signup";
import Student from "./routes/Student";
import Teacher from "./routes/Teacher";
import Page from "./routes/Page";
import AfterLogin from "./routes/AfterLogin";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/listPage">
          <Page/>
        </Route>
        <Route path="/guidePage">
          <Guide/>
        </Route>
        <Route path="/signupPage">
          <Signup/>
        </Route>
        <Route path="/afterLoginPage">
          <AfterLogin/>
        </Route>
        <Route path="/loginPage">
          <Login/>
        </Route>
        <Route path="/studentPage">
          <Student/>
        </Route>
        <Route path="/teacherPage">
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