import * as utils from "../../utils";

const validateCourseForm = (values) => {
  let errors = {};

  /*
   Rule 1: title is required
   */
  if (!values.title.trim()) {
    errors.title = "Required";
  }

  /*
   Rule 2: category is required
   */
  if (!values.category.trim()) {
    errors.category = "Required";
  }

  /*
   Rule 3: author is required
   */
  if (!values.author.trim()) {
    errors.author = "Required";
  }

  /*
   Rule 4: skills is required
   */
  if (!values.skills.trim()) {
    errors.skills = "Required";
  }

  /*
   Rule 5: chapters is required
   */
  if (!values.chapters.trim()) {
    errors.chapters = "Required";
  }

  /*
   Rule 6: priceInRupees is required
   Rule 7: priceInRupees should be a numerical value (integer or decimal)
   Rule 8: priceInRupees cannot be negative
   Rule 9: priceInRupees cannot be more than INR 30000
   */
  if (!values.priceInRupees.trim()) {
    errors.priceInRupees = "Required";
  } else if (!utils.checkIfValueIsNumerical(values.priceInRupees)) {
    errors.priceInRupees = "Price should be numerical";
  } else if (values.priceInRupees < 0) {
    errors.priceInRupees = "Price cannot be negative";
  } else if (values.priceInRupees > 30000) {
    errors.priceInRupees = "Price cannot be more than INR 30000";
  }

  /*
   Rule 10: priceAfterDiscount is required
   Rule 11: priceAfterDiscount should be a numerical value (integer or decimal)
   Rule 12: priceAfterDiscount cannot be negative
   Rule 13: priceAfterDiscount cannot be more than INR 30000
   */
  if (!values.priceAfterDiscount.trim()) {
    errors.priceAfterDiscount = "Required";
  } else if (!utils.checkIfValueIsNumerical(values.priceAfterDiscount)) {
    errors.priceAfterDiscount = "Discounted price should be numerical";
  } else if (values.priceAfterDiscount < 0) {
    errors.priceAfterDiscount = "Discounted price cannot be negative";
  } else if (values.priceAfterDiscount > 30000) {
    errors.priceAfterDiscount =
      "Discounted price cannot be more than INR 30000";
  }

  /*
   Rule 14: duration is required
   Rule 15: duration should be an integer value
   Rule 16: duration cannot be negative
   Rule 17: duration cannot be more than 1200 minutes
   */
  if (!values.duration.trim()) {
    errors.duration = "Required";
  } else if (!utils.checkIfValueIsInteger(values.duration)) {
    errors.duration = "Duration should contain only digits";
  } else if (values.duration < 0) {
    errors.duration = "Duration cannot be negative";
  } else if (values.duration > 1200) {
    errors.duration = "Duration cannot be more than 1200 minutes";
  }

  /*
   Rule 18: popularity is required
   Rule 19: popularity should be a numerical value (integer or decimal)
   Rule 20: popularity cannot be negative
   */
  if (!values.popularity.trim()) {
    errors.popularity = "Required";
  } else if (!utils.checkIfValueIsNumerical(values.popularity)) {
    errors.popularity = "Popularity should be numerical";
  } else if (values.popularity < 0) {
    errors.popularity = "Popularity cannot be negative";
  }

  /*
   Rule 21: imageURL is required
   Rule 22: imageURL should be a valid URL
   */
  if (!values.imageURL.trim()) {
    errors.imageURL = "Required";
  } else if (!utils.checkIfValidUrl(values.imageURL)) {
    errors.imageURL = "Invalid image URL";
  }

  /*
   Rule 23: videoURL is required
   Rule 24: videoURL should be a valid URL
   */
  if (!values.videoURL.trim()) {
    errors.videoURL = "Required";
  } else if (!utils.checkIfValidUrl(values.videoURL)) {
    errors.videoURL = "Invalid video URL";
  }

  return errors;
};

export default validateCourseForm;
