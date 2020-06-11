import User from '../models/User';

class UserController {
  async store(req, res) {
    const { name, email, password } = req.body;

    const userExists = await User.findOne({ where: { email } });

    if (userExists) {
      return res.status(400).json({ error: 'Usuário já existe.' });
    }

    const { id } = await User.create({ name, email, password });

    res.json({ id, email, name });
  }
}

export default new UserController();
