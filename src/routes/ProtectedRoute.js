import React from "react";

// imports for 3rd party libraries
import { Route, Redirect, useHistory } from "react-router-dom";
import PropTypes from "prop-types";

// imports for custom hooks
import { useAuth, authConstants } from "../contexts/auth";

// imports for route constants
import * as routeConstants from "./routeConstants";

export const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { isLoggedIn, getLoggedInUserRole } = useAuth();
  const history = useHistory();

  // function to redirect a user to the onboard (login/signup) page
  const redirectToOnboardPage = (props) => {
    return (
      <Redirect
        to={{
          pathname: routeConstants.ROUTE_URL.ONBOARD,
          state: { from: props.location },
        }}
      />
    );
  };

  return (
    <Route
      {...rest}
      render={(props) => {
        if (rest.role === authConstants.ROLE.USER) {
          // if user is logged in and the role is USER, render the component being accessed
          if (isLoggedIn && getLoggedInUserRole() === authConstants.ROLE.USER) {
            return <Component {...props} />;
          } else if (isLoggedIn) {
            console.log(history);
            // if some user is logged in but the role is not USER, redirect back to where the user came from
            return history.goBack();
          } else {
            // if the user is not logged in, redirect to OnboardPage
            return redirectToOnboardPage(props);
          }
        }

        if (rest.role === authConstants.ROLE.ADMIN) {
          // if admin is logged in and the role is ADMIN, render the component being accessed
          if (
            isLoggedIn &&
            getLoggedInUserRole() === authConstants.ROLE.ADMIN
          ) {
            return <Component {...props} />;
          } else if (isLoggedIn) {
            // if some user is logged in but the role is not ADMIN, redirect back to where the user came from
            return history.goBack();
          } else {
            // if the user is not logged in, redirect to OnboardPage
            return redirectToOnboardPage(props);
          }
        }
      }}
    />
  );
};

ProtectedRoute.propTypes = {
  role: PropTypes.string.isRequired,
};

export default ProtectedRoute;
