import React, { createContext, useState, useContext } from "react";

// imports for 3rd party libraries
import { useHistory } from "react-router-dom";

// imports for utils
import * as utils from "../utils";

// imports for API methods
import * as userApi from "../api/userApi";

// imports for custom hooks
import useLoader from "../hooks/useLoader";
import useNotification from "../hooks/useNotification";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const history = useHistory();
  const { showLoader, hideLoader } = useLoader();
  const { notification, showNotification } = useNotification();

  const [currentUser, setCurrentUser] = useState(null);

  const { doLogin, doSignup } = userApi;

  // Function to call login API and pass success and failure callbacks to it
  const login = ({ email, password }) => {
    showLoader();
    doLogin(
      { email: email, password: password },
      // success callback
      (response) => {
        setCurrentUser(response.data);

        // set logged-in user's details in local storage
        utils.setLocalStorage(
          utils.constants.USER_KEY_LOCAL_STORAGE,
          response.data
        );
        hideLoader();
        history.push("/home"); // redirect to home page on successful login
      },
      // failure callback
      (error, errorMessage) => {
        // show errors from specific to generic
        if (errorMessage) {
          showNotification(errorMessage);
        } else {
          showNotification(error.toString());
        }
        hideLoader();
      }
    );
  };

  // Function to call signup API and pass success and failure callbacks to it
  const signup = (values) => {
    showLoader();
    doSignup(
      values,
      // success callback
      (response) => {
        // TODO: Implement tab change to login
        // handleTabChange(0); // redirect to login tab when signup is successful
        hideLoader();

        // show the success message inside Snackbar component
        showNotification("Signed up successfully! Please login.");
      },
      // failure callback
      (error, errorMessage) => {
        // show errors from specific to generic
        if (errorMessage) {
          showNotification(errorMessage);
        } else {
          showNotification(error.toString());
        }
        hideLoader();
      }
    );
  };

  const authValues = {
    currentUser,
    login,
    signup,
  };

  return (
    <AuthContext.Provider value={authValues}>
      {children} {notification}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
