import React, { useContext } from "react";
import { AuthContext } from "../services/AuthContext";

// eslint-disable-next-line react/prop-types
export default function Dashboard({ src }) {
  const [user] = useContext(AuthContext).user;
  return (
    <div className="min-h-full w-full">
      <div className="bg-gray-800 pb-32">
        <header className="py-10 ">
          <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-white">
              Welcome {user.username},<br /> hope you will have fun with
              flaaaaags!
            </h1>
          </div>
        </header>
      </div>

      <main className="-mt-32">
        <div className="max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:px-8">
          <img src={src} alt="backgroundImage" />
          <div className="bg-white rounded-lg shadow px-5 py-6 sm:px-6">
            <div className="rounded-lg h-96" />
          </div>
        </div>
      </main>
    </div>
  );
}
