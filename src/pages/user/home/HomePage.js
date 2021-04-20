import React, { useState } from "react";

// imports for MUI components
import { MuiPrimarySearchAppBar } from "../../../components/MUI/MuiPrimarySearchAppBar";

// imports for custom components
import { Loader } from "../../../components/UI/Loader";

// imports for APIs
import * as coursesApi from "../../../api/coursesApi";

// imports for styles
import classes from "./HomePage.module.css";

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(false);

  const { searchCourseByTitle, getCoursesByCategory } = coursesApi;

  const handleTitleSearch = (title) => {
    setIsLoading(true);
    searchCourseByTitle(
      title,
      // success callback
      (response) => {
        console.log(response);
        setIsLoading(false);
      },
      // failure callback
      (_, errorMessage) => {
        console.error(errorMessage);
        setIsLoading(false);
      }
    );
  };

  const handleCategorySearch = (category) => {
    setIsLoading(true);
    getCoursesByCategory(
      category,
      // success callback
      (response) => {
        console.log(response);
        setIsLoading(false);
      },
      // failure callback
      (_, errorMessage) => {
        console.error(errorMessage);
        setIsLoading(false);
      }
    );
  };

  return (
    <div className={classes.homePage}>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={classes.app}>
          <MuiPrimarySearchAppBar
            handleTitleSearch={handleTitleSearch}
            handleCategorySearch={handleCategorySearch}
          />
        </div>
      )}
    </div>
  );
};

export { HomePage };