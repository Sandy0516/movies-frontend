import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:8080/", //"https://441d-120-138-12-227.ngrok.io",
  headers: { "ngrok-skip-browser-warnig": "true" },
  // headers: {
  //   "Access-Control-Allow-Origin": "*",
  //   "Access-Control-Allow-Headers": "*",
  //   // "Access-Control-Allow-Credentials": "true",
  // },
});
