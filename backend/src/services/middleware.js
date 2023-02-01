const database = require("../../database");

const verifyPassword = (req, res, next) => {
  const { id } = req.params;
  const { password } = req.body;
  database
    .query(`select * from user where id = ?`, [id])
    .then(([result]) => {
      const dbPassword = result[0].password;
      if (dbPassword !== password) {
        res.send("Wrong Password").status(401);
      } else next();
    })
    .catch((err) => {
      console.error("No user found", err);
    });
};

const checkScore = (req, res, next) => {
  const { id } = req.params;
  const { score } = req.body;
  database
    .query(`select * from score where id_user = ?`, [id])
    .then(([result]) => {
      if (!result.length) next();
      else if (score <= result[0].score) res.send("Try again!").status(200);
      else {
        database
          .query(`update score set score = ? where id_user = ?`, [score, id])
          .then(() => {
            res.send("Congratulations, keep going!").status(200);
          })
          .catch((err) => {
            console.error("Score error", err);
          });
      }
    });
};

module.exports = { verifyPassword, checkScore };
