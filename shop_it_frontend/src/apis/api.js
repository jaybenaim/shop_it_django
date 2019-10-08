import axios from "axios";

// axios.defaults.xsrfCookieName = "csrftoken";
// axios.defaults.xsrfHeaderName = "X-CSRFToken";

export default axios.create({
  baseURL: "https://shop-it-quick.herokuapp.com/api/"
  // baseURL: "http://localhost:8000/api/"
});
