const models = require("../models");

const postScore = (req, res) => {
  const { id } = req.params;
  const { score } = req.body;

  models.score
    .postScore(id, score)
    .then(() => {
      res.send("Score registered").status(200);
    })
    .catch((err) => {
      console.error("Score update error", err);
    });
};

module.exports = { postScore };
