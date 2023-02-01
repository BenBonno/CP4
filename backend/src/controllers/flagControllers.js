const axios = require("axios");
const countries = require("../services/flagData");

const arrayCountries = Object.values(countries);

const randomCountry = () => {
  const random =
    arrayCountries[Math.floor(Math.random() * arrayCountries.length + 1)];
  return { name: random.name, threeLetterCode: random.threeLetterCode };
};

const getRandomFlag = (req, res) => {
  const randomGroup = [];
  const randomCountry1 = randomCountry();
  const randomCountry2 = randomCountry();
  const randomCountry3 = randomCountry();

  randomGroup.push(randomCountry1, randomCountry2, randomCountry3);
  axios
    .get(`https://countryflagsapi.com/svg/${randomCountry1.threeLetterCode}`)
    .then((response) => {
      res.json({
        url: response.request.res.responseUrl,
        randomGroup,
      });
    })
    .catch((error) => {
      console.warn(error);
    });
};

module.exports = { getRandomFlag };
