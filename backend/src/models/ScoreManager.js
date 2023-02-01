const AbstractManager = require("./AbstractManager");

class ScoreManager extends AbstractManager {
  constructor() {
    super({ table: "score" });
  }

  postScore = (id, score) => {
    return this.connection.query(
      `insert into ${this.table} (id_user,score) values (?,?)`,
      [id, score]
    );
  };
}
module.exports = ScoreManager;
