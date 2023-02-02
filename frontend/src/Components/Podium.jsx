import React from "react";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function Podium({ nomDuneProps }) {
  return (
    <div className="flex flex-row justify-center pt-12">
      <Link to="/quizz">
        <p className="font-['dk-john-brown'] text-4xl flex justify-center items-center px-6 py-2 border-2 border-teal-900 text-teal-900 font-medium leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">
          {nomDuneProps} {nomDuneProps > 1 ? "points" : "point"}, go working
          your flags again...
        </p>
      </Link>
    </div>
  );
}

export default Podium;
