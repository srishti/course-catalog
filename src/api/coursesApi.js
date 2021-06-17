// imports for utils
import { apiUtils, apiConstants } from "./api-utils";

/**
 * Function to search for a course
 * @param {String} title - substring which needs to be searched in course title
 * @param {Function} successCallback - callback method to be called when API succeeds
 * @param {Function} failureCallback - callback method to be called when API fails
 * @returns {Array} array of courses whose title contains the given substring (each course is an object consisting of course details)
 */
export async function searchCourseByTitle(
  title,
  successCallback,
  failureCallback
) {
  try {
    await apiUtils.sendApiRequest(
      apiConstants.HTTP_METHOD.GET,
      apiConstants.COURSES_API_ROUTE.TUTORIALS,
      null,
      { title: title },
      null,
      apiUtils.getRequestHeaderWithToken(),
      successCallback,
      failureCallback
    );
  } catch (error) {
    if (failureCallback) {
      failureCallback(error);
    }
  }
}

/**
 * Function to get all courses within a given category
 * @param {String} categoryName - category string corresponding to which courses are to be fetched
 * @param {Function} successCallback - callback method to be called when API succeeds
 * @param {Function} failureCallback - callback method to be called when API fails
 * @returns {Array} array of courses which belong to the given category (each course is an object consisting of course details)
 */
export async function getCoursesByCategory(
  categoryName,
  successCallback,
  failureCallback
) {
  try {
    await apiUtils.sendApiRequest(
      apiConstants.HTTP_METHOD.GET,
      apiConstants.COURSES_API_ROUTE.TUTORIALS,
      [apiConstants.COURSES_API_PATH_PARAMETER.CATEGORIES, categoryName],
      null,
      null,
      apiUtils.getRequestHeaderWithToken(),
      successCallback,
      failureCallback
    );
  } catch (error) {
    if (failureCallback) {
      failureCallback(error);
    }
  }
}

/**
 * Function to get all courses (published as well as non-published)
 * @param {Function} successCallback - callback method to be called when API succeeds
 * @param {Function} failureCallback - callback method to be called when API fails
 * @returns {Array} array of all courses in the database (each course is an object consisting of course details)
 */
export async function getAllCourses(successCallback, failureCallback) {
  try {
    await apiUtils.sendApiRequest(
      apiConstants.HTTP_METHOD.GET,
      apiConstants.COURSES_API_ROUTE.TUTORIALS,
      null,
      null,
      null,
      apiUtils.getRequestHeaderWithToken(),
      successCallback,
      failureCallback
    );
  } catch (error) {
    if (failureCallback) {
      failureCallback(error);
    }
  }
}

/**
 * Function to get all published courses
 * @param {Function} successCallback - callback method to be called when API succeeds
 * @param {Function} failureCallback - callback method to be called when API fails
 * @returns {Array} array of all published courses in the database (each course is an object consisting of course details)
 */
export async function getAllPublishedCourses(successCallback, failureCallback) {
  try {
    await apiUtils.sendApiRequest(
      apiConstants.HTTP_METHOD.GET,
      apiConstants.COURSES_API_ROUTE.TUTORIALS,
      [apiConstants.COURSES_API_PATH_PARAMETER.PUBLISHED],
      null,
      null,
      apiUtils.getRequestHeaderWithToken(),
      successCallback,
      failureCallback
    );
  } catch (error) {
    if (failureCallback) {
      failureCallback(error);
    }
  }
}

/**
 * Function to get course with given id
 * @param {*} courseId - id of the course to be fetched
 * @param {*} successCallback - callback method to be called when API succeeds
 * @param {*} failureCallback - callback method to be called when API fails
 * @returns {Object} course with given ID
 */
export async function getCourseById(
  courseId,
  successCallback,
  failureCallback
) {
  try {
    await apiUtils.sendApiRequest(
      apiConstants.HTTP_METHOD.GET,
      apiConstants.COURSES_API_ROUTE.TUTORIALS,
      [courseId],
      null,
      null,
      apiUtils.getRequestHeaderWithToken(),
      successCallback,
      failureCallback
    );
  } catch (error) {
    if (failureCallback) {
      failureCallback(error);
    }
  }
}

/**
 * Function to delete a course with given id
 * @param {*} courseId - id of the course to be deleted
 * @param {*} successCallback - callback method to be called when API succeeds
 * @param {*} failureCallback - callback method to be called when API fails
 */
export async function deleteCourse(courseId, successCallback, failureCallback) {
  try {
    await apiUtils.sendApiRequest(
      apiConstants.HTTP_METHOD.DELETE,
      apiConstants.COURSES_API_ROUTE.TUTORIALS,
      [courseId],
      null,
      null,
      apiUtils.getRequestHeaderWithToken(),
      successCallback,
      failureCallback
    );
  } catch (error) {
    if (failureCallback) {
      failureCallback(error);
    }
  }
}

/**
 * Function to get all distinct categories of courses
 * @param {*} courseId - id of the course to be deleted
 * @param {*} successCallback - callback method to be called when API succeeds
 * @param {*} failureCallback - callback method to be called when API fails
 */
export async function getAllCategories(successCallback, failureCallback) {
  try {
    await apiUtils.sendApiRequest(
      apiConstants.HTTP_METHOD.GET,
      apiConstants.COURSES_API_ROUTE.TUTORIALS,
      [apiConstants.COURSES_API_PATH_PARAMETER.CATEGORIES],
      null,
      null,
      apiUtils.getRequestHeaderWithToken(),
      successCallback,
      failureCallback
    );
  } catch (error) {
    if (failureCallback) {
      failureCallback(error);
    }
  }
}
