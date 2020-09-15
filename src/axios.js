import axios from "axios";
const instance = axios.create({
  baseURL: "...", //the api url ll go on here like some kind of cloud functions
});
export default instance;
