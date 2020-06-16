import User from '../models/User';

class UserController {
  async index(req, res) {
    const { idUser } = req.params;
    const { tokenId } = req;

    const user = await User.findByPk(idUser);

    if (!user) {
      return res.status(400).json({ error: 'Usuário já existe.' });
    }

    if (user.id !== tokenId) {
      return res.status(400).json({ error: 'Acesso negado.' });
    }

    if (!user.log) {
      return res.status(400).json({ error: 'Necessário estar logado.' });
    }

    res.json({ user });
  }

  async store(req, res) {
    const { name, email, password } = req.body;

    const userExists = await User.findOne({ where: { email } });

    if (userExists) {
      return res.status(400).json({ error: 'Usuário já existe.' });
    }

    const { id } = await User.create({ name, email, password });

    res.json({ id, name, email });
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

    if (!user.log) {
      return res.status(400).json({ error: 'Necessário estar logado.' });
    }

    const { id, name } = await user.update(req.body);

    const token = user.createToken({
      id,
      name,
      email,
    });

    res.json({ user: { id, name, email }, token });
  }

  async delete(req, res) {
    const { idUser } = req.params;
    const { tokenId } = req;

    const findUser = await User.findByPk(idUser);

    if (!findUser) {
      return res.status(400).json({ error: 'Usuário não localizado.' });
    }

    if (findUser.id !== tokenId) {
      return res.status(400).json({ error: 'Acesso negado.' });
    }

    if (!findUser.log) {
      return res.status(400).json({ error: 'Necessário estar logado.' });
    }

    await findUser.destroy();

    res.json({ mensagem: 'Usuário deletado com sucesso.' });
  }
}

export default new UserController();
