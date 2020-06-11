"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);

class SessionController {
  async store(req, res) {
    const { email, password } = req.body;

    const user = await _User2.default.findOne({ where: { email } });

    if (!user) {
      return res.status(400).json({ error: 'Usuário não existe.' });
    }

    const checkPass = await user.comparePassword(password);

    if (!checkPass) {
      return res.status(400).json({ error: 'Senha incorreta.' });
    }

    const { id, name } = user;

    res.json({
      user: {
        id,
        name,
      },
    });
  }
}
exports. default = new SessionController();
