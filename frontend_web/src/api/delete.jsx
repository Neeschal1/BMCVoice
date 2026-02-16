  import axios from "axios"
  const url = import.meta.env.VITE_API_URL;
  
  const handleDelete = async (user, navigation) => {
    try {
        const res = await axios.delete(`${url}details/delete/${user}/`);
        console.log("Deleted user: ", user['Name']);
        navigation("/home")
    } catch (err) {
        console.log("Error: ", err);
        return false
    }
  }

  export default handleDelete