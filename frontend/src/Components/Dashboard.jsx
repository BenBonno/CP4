import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../services/AuthContext";

// eslint-disable-next-line react/prop-types
export default function Dashboard({ src }) {
  const [user] = useContext(AuthContext).user;
  const nav = useNavigate();
  const handleClick = () => nav("/quizz");
  return (
    <div className="min-h-full w-full">
      <div className="bg-gray-800 pb-32">
        <header className="py-10 ">
          <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-300 font-['dk-john-brown']">
              Welcome {user.username},<br /> hope you will have fun with
              flaaaaags!
            </h1>
          </div>
        </header>
      </div>

      <main className="-mt-32">
        <div className="max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:px-8">
          <button onClick={handleClick} type="button">
            <img src={src} alt="backgroundImage" />
          </button>
          <div className="bg-white rounded-lg shadow px-5 py-6 sm:px-6">
            <div className="rounded-lg h-96" />
          </div>
        </div>
      </main>
    </div>
  );
}
