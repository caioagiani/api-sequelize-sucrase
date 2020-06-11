import User from '../models/User';

class SessionController {
  async store(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(400).json({ error: 'Usuário não existe.' });
    }

    const checkPass = await user.comparePassword(password);

    if (!checkPass) {
      return res.status(400).json({ error: 'Senha incorreta.' });
    }

    const { id, name } = user;

    const token = user.createToken({
      id,
      name,
      email,
    });

    res.json({ user: { id, name, email }, token });
  }
}

export default new SessionController();
