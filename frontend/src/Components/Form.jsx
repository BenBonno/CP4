import axios from "axios";
import React, { useContext } from "react";
import { ExclamationIcon } from "@heroicons/react/outline";
import Dashboard from "./Dashboard";
import { AuthContext } from "../services/AuthContext";

function Form() {
  // const [, setOpen] = useContext(AuthContext).modal; // TODO: check magical line
  const [user, setUser] = useContext(AuthContext).user;
  const [userReady, setUserReady] = useContext(AuthContext).userReady;
  const [, setDataModal] = useContext(AuthContext).dataModal;

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    axios
      .post("http://localhost:5100/user", data)
      .then((response) => {
        if (response.data === "Wrong password") {
          console.error("Wrong password");
          setDataModal({
            title: "Wrong password",
            content: "Please try again",
            icon: (
              <ExclamationIcon
                className="h-6 w-6 text-red-600"
                aria-hidden="true"
              />
            ),
          });
          return;
        }
        setUser(response.data);
        setUserReady(true);
      })
      .catch((err) => {
        console.error("Mauvais mot de passe", err);
      });
  };
  console.warn("user", user);

  return (
    <div className="flex justify-center w-full ">
      {!userReady ? (
        <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Connect before having fun with flaaaaags
            </h2>
          </div>

          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
              <form
                className="space-y-6"
                action="submit"
                onSubmit={handleSubmit}
                method="POST"
              >
                <div>
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Username
                  </label>
                  <div className="mt-1">
                    <input
                      id="username"
                      name="username"
                      type="text"
                      autoComplete="username"
                      required
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>
                  <div className="mt-1">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Hit me baby one more time
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : (
        <Dashboard src="bgSheldon.webp" />
      )}
    </div>
  );
}

export default Form;
