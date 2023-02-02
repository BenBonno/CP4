import React, { useEffect, useState } from "react";
import randomCall from "../services/randomCall";
import Dashboard from "./Dashboard";

function Quizz() {
  const [randomFlag, setRandomFlag] = useState("");

  useEffect(() => {
    randomCall().then((result) => {
      setRandomFlag(result.data);
      console.warn("result.data", result.data);
    });
  }, []);

  return (
    <div>
      <p>{randomFlag?.url}</p>
      <Dashboard src="bgQuizz.webp" />
    </div>
  );
}

export default Quizz;
