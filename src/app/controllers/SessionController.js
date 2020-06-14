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

    user.update({ log: true });

    return res.json({ user: { id, name, email }, token });
  }

  async destroy(req, res) {
    const { tokenId } = req;

    const user = await User.findByPk(tokenId);

    if (!user) {
      return res.status(400).json({ error: 'Usuário não existe.' });
    }

    if (!user.log) {
      return res.status(400).json({ error: 'Usuário não está logado.' });
    }

    user.update({ log: false });

    return res.json({ message: 'Usuário desconectado com sucesso.' });
  }
}

export default new SessionController();
