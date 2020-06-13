import bcryptjs from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import Sequelize, { Model } from 'sequelize';

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password: Sequelize.VIRTUAL,
        password_hash: Sequelize.STRING,
        log: Sequelize.BOOLEAN,
      },
      {
        sequelize,
      }
    );

    this.addHook('beforeSave', async (user) => {
      if (user.password) {
        user.password_hash = await bcryptjs.hash(user.password, 5);
      }
    });

    return this;
  }

  comparePassword(password) {
    return bcryptjs.compare(password, this.password_hash);
  }

  createToken(params = {}) {
    const expiresSet = new Date(Date.now());

    expiresSet.setMinutes(expiresSet.getMinutes() + 30);

    const time = parseInt(expiresSet.getTime());

    return sign({ ...params, expiresIn: time }, process.env.HASH);
  }
}

export default User;
