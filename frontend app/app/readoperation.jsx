import axios from "axios";
import url from '../api'

// GET
const fetchdetails = async () => {
  try {
    const responses = await axios.get(`${url}details/list/`);
    console.log("All Data: ", responses.data);
    return responses.data
  } catch (err) {
    console.log("Error: ", err)
  }
};

export default fetchdetails