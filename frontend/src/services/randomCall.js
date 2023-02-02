import axios from "axios";

const randomCall = async () => {
  const axiosData = await axios.get("http://localhost:5100/random");
  return axiosData;
};

export default randomCall;
