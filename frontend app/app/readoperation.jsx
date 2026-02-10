import axios from "axios";
import api from '../../url'

// GET
const fetchdetails = async () => {
  try {
    const responses = await axios.get(`${api}details/list/`);
    console.log("All Data: ", responses.data);
    return responses.data
  } catch (err) {
    console.log("Error: ", err)
  }
};

export default fetchdetails