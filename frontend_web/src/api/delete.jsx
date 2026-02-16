  import axios from "axios"
  const url = import.meta.env.VITE_API_URL;
  
  const handleDelete = async (user) => {
    try {
        const res = await axios.delete(`${url}details/delete/${user}/`);
        console.log("Deleted user: ", user['Name']);
        return true;
    } catch (err) {
        console.log("Error: ", err);
        return false
    }
  }

  export default handleDelete