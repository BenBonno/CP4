const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  insert(username, password) {
    return this.connection.query(
      `insert into ${this.table} (username,password) values (?,?)`,
      [username, password]
    );
  }

  findAllUsers() {
    return this.connection.query(
      `select u.id,u.username, s.score from ${this.table} u left join score s on u.id = s.id_user order by s.score desc`
    );
  }

  update(username, password) {
    return this.connection.query(
      `update ${this.table} set username = ? where password = ?`,
      [username, password]
    );
  }
}

module.exports = UserManager;
