import React, { useEffect } from "react";
import randomCall from "../services/randomCall";

function Quizz() {
  useEffect(() => {
    randomCall();
  }, []);

  return (
    <div>
      <p>Quizz</p>
    </div>
  );
}

export default Quizz;
