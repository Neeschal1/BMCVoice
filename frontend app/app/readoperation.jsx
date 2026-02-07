import axios from "axios";

const api = "https://bmc-s0uj.onrender.com/";

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