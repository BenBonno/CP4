import axios from "axios";
import React, { useState } from "react";

function Form() {
  const [user, setUser] = useState({});
  const [userReady, setUserReady] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    setUser(data);
    setUserReady(true)
    axios
      .post("http://localhost:5100/user", data)
      .then((res) => {
        console.warn(res);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div>
      <div className="bg-red-200 flex flex-col gap-4 justify-center">
        {!userReady && user ? (
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <label className="bg-red-500 flex items-center" htmlFor="username">
              Nom d'utilisateur
            </label>
            <input type="text" id="username" name="username" />
            <label className="bg-red-500 flex items-center" htmlFor="password">
              Mot de passe
            </label>
            <input type="password" id="password" name="password" />
            <button className="bg-red-500" type="submit">
              Hit me baby one more time
            </button>
          </form>
        ) : (
          <p>Vous êtes connecté</p>
        )}
      </div>
    </div>
  );
}

export default Form;
