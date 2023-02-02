const axios = require("axios");
const countries = require("../services/flagData");

const arrayCountries = Object.values(countries);

const randomCountry = () => {
  const random =
    arrayCountries[Math.floor(Math.random() * arrayCountries.length + 1)];
  return {
    name: random.name,
    threeLetterCode: random.threeLetterCode,
    twoLetterCode: random.twoLetterCode,
  };
};

const getRandomFlag = (req, res) => {
  const randomGroup = [randomCountry(), randomCountry(), randomCountry()];
  // const randomCountry1 = randomCountry();
  // const randomCountry2 = randomCountry();
  // const randomCountry3 = randomCountry();

  // randomGroup.push(randomCountry1, randomCountry2, randomCountry3);
  axios
    .get(
      `https://restcountries.com/v3.1/alpha/${
        randomGroup[Math.floor(Math.random() * randomGroup.length)]
          .twoLetterCode
      }`
    )
    .then((response) => {
      res.json({
        url: response.data[0].flags.svg,
        randomGroup: randomGroup.map((country) => country),
      });
    })
    .catch((error) => {
      console.warn(error);
    });
};

module.exports = { getRandomFlag };
