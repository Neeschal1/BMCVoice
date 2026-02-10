import axios from 'axios'
import url from '../api'

const deletedetails = async (id) => {
  try {
    const rec = await axios.delete(`${url}details/delete/${id}/`);
    console.log("Deleted:", rec.status); 
    return true;
  } catch (err) {
    console.log("Delete error:", err.response?.data || err.message);
    return false;
  }
};

export default deletedetails;
