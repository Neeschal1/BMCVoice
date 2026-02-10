import url from "./url";
import axios from "axios";

const handleSubmit = async (name, address, phone, details, setIsSubmitting) => {
    setIsSubmitting(true)
  const users_data = {
    Name: name,
    Address: address,
    Phone_Number: phone,
    Content: details,
    Image_1: "https://www.pinterest.com/pin/178314466489293903/",
    Image_2: "https://www.pinterest.com/pin/178314466489293903/",
    Image_3: "https://www.pinterest.com/pin/178314466489293903/",
    Image_4: "https://www.pinterest.com/pin/178314466489293903/",
    Image_5: "https://www.pinterest.com/pin/178314466489293903/",
  };

  try {
    const res = await axios.post(`${url}details/create/`, users_data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log("Data created successfully :)")
    console.log("Your data: ", res)
  } catch (err) {
    console.log("Error: ", err)
  } finally {
    setIsSubmitting(false)
  }
};

export default handleSubmit;
