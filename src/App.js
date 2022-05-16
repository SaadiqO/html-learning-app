import React from "react";
import Register from "./views/Register";
import Home from "./views/Home";
import Login from "./views/Login";
import Profile from "./views/Profile";
import Quiz from "./views/Quiz";
import Tutorial from "./views/Tutorial";
import Header from "./components/Header";
import { AuthProvider } from "./contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { PrivateRoute } from "./components/PrivateRoute";
import ResetPassword from "./views/ResetPassword";
function App() {
  return (
        <Router>
          <AuthProvider>
            <Header />
            <Switch>
              <PrivateRoute exact path="/quiz" component={Quiz} />
              <PrivateRoute exact path="/profile" component={Profile} />
              <Route path="/register" component={Register} />
              <Route path="/login" component={Login} />
              <Route path="/reset" component={ResetPassword} />
              <Route path="/tutorial" component={Tutorial} />
              <Route path="/" component={Home} />
            </Switch>

          </AuthProvider>
        </Router>
  );
}

export default App;
