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

  async update(req, res) {
    const { email, oldPassword } = req.body;
    const { tokenId } = req;

    const user = await User.findByPk(tokenId);

    if (email !== user.email) {
      const userExists = await User.findOne({ where: { email } });

      if (userExists) {
        return res.status(400).json({ error: 'Usuário já existe.' });
      }
    }

    if (oldPassword && !(await user.comparePassword(oldPassword))) {
      return res.status(400).json({ error: 'Senha incorreta.' });
    }

    const { id, name } = await user.update(req.body);

    const token = user.createToken({
      id,
      name,
      email,
    });

    res.json({ user: { id, name, email }, token });
  }
}

export default new UserController();
