"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);

class UserController {
  async store(req, res) {
    const { name, email, password } = req.body;

    const userExists = await _User2.default.findOne({ where: { email } });

    if (userExists) {
      return res.status(400).json({ error: 'Usuário já existe.' });
    }

    const { id } = await _User2.default.create({ name, email, password });

    res.json({ id, email, name });
  }
}

exports. default = new UserController();
