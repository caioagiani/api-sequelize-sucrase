import Sequelize from 'sequelize';

import User from '../app/models/User';
import conn from '../config/database';

const models = [User];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(conn);

    models.map((model) => model.init(this.connection));
  }
}

export default new Database();
