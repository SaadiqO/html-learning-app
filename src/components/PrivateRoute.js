import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import { Route } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export function PrivateRoute({ component: Component, ...rest }) {
  const { currentUser } = useAuth();
  useEffect(() => {}, [currentUser]);
  return (
    <Route
      {...rest}
      render={(props) => {
        return currentUser ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        );
      }}
    ></Route>
  );
}
export default PrivateRoute;
