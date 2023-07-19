import axios from "axios";
import jwt_decode from "jwt-decode";

const setAuthToken = (token) => {
  if (token) {
    localStorage.setItem("GrandealzBackendJwtToken", token);
    const decoded =
      localStorage.GrandealzBackendJwtToken &&
      jwt_decode(localStorage.GrandealzBackendJwtToken);
    axios.defaults.headers.common["Authorization"] = "Bearer " + token;
    axios.defaults.headers.common["user_id"] = parseInt(decoded.uid);
  } else {
    delete axios.defaults.headers.common["Authorization"];
    delete axios.defaults.headers.common["user_id"];
    localStorage.removeItem("Authorization");
  }
};

export default setAuthToken;
