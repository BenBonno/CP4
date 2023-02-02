import React, { useEffect, useState } from "react";
import randomCall from "../services/randomCall";
import DashboardQuizz from "./DashboardQuizz";

function Quizz() {
  const [randomFlag, setRandomFlag] = useState();

  useEffect(() => {
    randomCall().then((result) => {
      const randomWithTrue = result.data;
      randomWithTrue.randomGroup[0].correct = true;
      randomWithTrue.randomGroup.sort(() => Math.random() - 0.5);
      setRandomFlag(randomWithTrue);
    });
  }, []);
  return (
    <div>
      <DashboardQuizz
        src="bgQuizz.webp"
        random={[randomFlag, setRandomFlag, randomCall]}
      />
    </div>
  );
}

export default Quizz;
