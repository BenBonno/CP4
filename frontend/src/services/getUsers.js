import axios from "axios";

const getUsers = () => {
  axios.get("http://localhost:5100/users").then((res) => {
    console.warn(res.data);
  });
};

export default getUsers;
