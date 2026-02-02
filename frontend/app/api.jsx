import axios from "axios";

const api = "http://192.168.1.66:8000/";

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