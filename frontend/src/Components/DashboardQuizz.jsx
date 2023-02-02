import React, { useContext, useEffect, useState } from "react";
import { ExclamationIcon } from "@heroicons/react/outline";
import axios from "axios";
import { AuthContext } from "../services/AuthContext";
import Podium from "./Podium";
// eslint-disable-next-line react/prop-types
export default function Dashboard({ src, random }) {
  const [user] = useContext(AuthContext).user;
  const [randomFlag, setRandomFlag, randomCall] = random;
  const [count, setCount] = useState(0);
  const [gameReady, setGameReady] = useState(false);
  const [, setDataModal] = useContext(AuthContext).dataModal;
  const [gameOver, setGameOver] = useState(false);

  const sendScore = () => {
    console.warn({ id: user.id, score: count });
    axios
      .post(`http://localhost:5100/users/${user.id}`, {
        id: user.id,
        score: count,
      })
      .then((res) => {
        console.warn(res);
      });
  };

  const handleStart = () => {
    setDataModal({
      title: "Time to play",
      content: "Be quick or be dead, you only have 2 minutes to answer!",
      button: "Let's go!",
      icon: (
        <ExclamationIcon className="h-6 w-6 text-red-600" aria-hidden="true" />
      ),
      callback: () => {
        setGameReady(true);
        setGameOver(false);
        setCount(0);
        randomCall().then((res) => {
          setRandomFlag(res.data);
        });
        setTimeout(async () => {
          await setDataModal({
            title: "Time's up",
            content: `it's time to see your score : ${count} points`,
            button: "Send my score to infinity and beyond!",
            icon: (
              <ExclamationIcon
                className="h-6 w-6 text-green-600"
                aria-hidden="true"
              />
            ),
            callback: () => {
              setGameOver(true);
              sendScore();
              setGameReady(false);
            },
          });
        }, 5000);
      },
    });
  };

  const checkAnswer = (e) => {
    const urlWithoutSvg = randomFlag.url
      .replace(".svg", "")
      .substr(-2)
      .toLowerCase();
    if (urlWithoutSvg === e.target.dataset.twolettercode.toLowerCase()) {
      randomCall().then((res) => {
        setRandomFlag(res.data);
        setCount(count + 1);
      });
    } else {
      randomCall().then((res) => {
        setRandomFlag(res.data);
        setCount(count - 1);
      });
    }
  };

  useEffect(() => {
    console.warn(count);
  }, [count]);

  return (
    <div className="min-h-full w-full ">
      <div className="bg-gray-800 pb-32">
        <header className="py-10 ">
          <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold justify-center flex text-white font-['dk-john-brown']">
              Welcome {user.username},<br /> hope you will have fun with
              flaaaaags!
            </h1>
          </div>
        </header>
      </div>
      {gameReady ? (
        <main className=" -mt-16">
          <div className="max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:px-8">
            <div className="relative">
              <img
                className="absolute h-16 top-[40%] right-[2%]  md:h-28 md:right[6%] md:top-[44%] lg:h-36 lg:right-[3%] lg:top-[42%] xl:h-44 xl:right-[5%] xl:top-[44%]  border-4  "
                src={randomFlag?.url}
                alt="backgroundImage"
              />
              <img className=" relative " src={src} alt="backgroundImage" />
              <div className="mt-4  flex flex-col absolute w-5/6 gap-5 justify-center  md:-translate-y-[130%] md:w-1/3 md:ml-6 md:mt-0">
                {randomFlag &&
                  randomFlag.randomGroup.map((country) => (
                    <button
                      className=" bg-orange-600 rounded-3xl text-md p-3 text-gray-100"
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
              <div className="rounded-lg h-78" />
            </div>
          </div>
        </main>
      ) : (
        <div className="flex justify-center items-center border p-6 bg-slate-600 mt-28">
          <button
            onClick={handleStart}
            type="button"
            className="font-['dk-john-brown'] flex justify-center items-center px-6 py-2 border-2 border-green-500 text-green-500 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
          >
            Let's get ready to ruuuuuuumble!
          </button>
        </div>
      )}
      {gameOver && <Podium nomDuneProps={count} />}
    </div>
  );
}
