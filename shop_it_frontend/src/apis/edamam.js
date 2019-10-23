import axios from "axios";

// axios.defaults.xsrfCookieName = "csrftoken";
// axios.defaults.xsrfHeaderName = "X-CSRFToken";

export default axios.create({
  baseURL: "https://api.edamam.com/api/food-database/"
});
