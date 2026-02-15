import axios from 'axios'
const url = import.meta.env.VITE_API_URL;

const HandleReadData = async () => {
    const voices = await axios.get(`${url}details/list/`);
    return voices
}

export default HandleReadData