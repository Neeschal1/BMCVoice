import axios from 'axios'
const api = "https://bmc-s0uj.onrender.com/";

const deletedetails = async (id) => {
  try {
    const rec = await axios.delete(`${api}details/delete/${id}/`);
    console.log("Deleted:", rec.status); 
    return true;
  } catch (err) {
    console.log("Delete error:", err.response?.data || err.message);
    return false;
  }
};

export default deletedetails;
