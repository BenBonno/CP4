import axios from "axios";

const randomCall = () => {
  axios.get("http://localhost:5100/random").then((res) => {
    console.warn(res.data);
  });
};

export default randomCall;
