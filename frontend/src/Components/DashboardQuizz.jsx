import React, { useContext, useState } from "react";
import { AuthContext } from "../services/AuthContext";

// eslint-disable-next-line react/prop-types
export default function Dashboard({ src, random }) {
  const [user] = useContext(AuthContext).user;
  const [randomFlag, setRandomFlag, randomCall] = random;
  const [count, setCount] = useState(0);

  const checkAnswer = (e) => {
    const urlWithoutSvg = randomFlag.url
      .replace(".svg", "")
      .substr(-2)
      .toLowerCase();
    console.log(e.target.dataset.twolettercode.toLowerCase(), urlWithoutSvg);
    if (urlWithoutSvg === e.target.dataset.twolettercode.toLowerCase()) {
      setCount(count + 1);
      randomCall().then((res) => {
        setRandomFlag(res.data);
      });
    }
    // console.log(
    //   "🚀 ~ file: DashboardQuizz.jsx:20 ~ checkAnswer ~ count",
    //   count
    // );
  };

  return (
    <div className="min-h-full w-full">
      <div className="bg-gray-800 pb-32">
        <header className="py-10 ">
          <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold justify-center flex text-white">
              Welcome {user.username},<br /> hope you will have fun with
              flaaaaags!
            </h1>
          </div>
        </header>
      </div>
      <main className=" -mt-16">
        <div className="max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <img
              className="absolute h-16 top-[40%] right-[5%]  md:h-28 md:right[6%] md:top-[44%] lg:h-36 lg:right-[3%] lg:top-[42%] xl:h-48 xl:right-[8%] xl:top-[44%]  border-4 border "
              src={randomFlag?.url}
              alt="backgroundImage"
            />
            <img className=" relative " src={src} alt="backgroundImage" />
            <div className="mt-4  flex flex-col absolute w-full gap-6 justify-center md:-translate-y-[130%] md:w-1/3 md:ml-6 md:mt-0">
              {randomFlag &&
                randomFlag.randomGroup.map((country) => (
                  <button
                    className=" bg-orange-600 rounded-3xl text-lg p-3 text-gray-100"
                    type="button"
                    key={country.threeLetterCode}
                    onClick={(e) => checkAnswer(e)}
                    data-twolettercode={country.twoLetterCode}
                  >
                    {country.name[0]}
                  </button>
                ))}
            </div>
          </div>
          <div className="bg-white rounded-lg shadow px-5 py-6 sm:px-6">
            <div className="rounded-lg h-96" />
          </div>
        </div>
      </main>
    </div>
  );
}
