import { verify } from 'jsonwebtoken';
import { promisify } from 'util';

export default async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ error: 'Não autorizado.' });
  }

  const [, token] = authorization.split(' ');

  try {
    const decoded = await promisify(verify)(token, process.env.HASH);

    if (decoded.expiresIn < Date.now()) {
      return res.status(401).json({ error: 'Sessão inválida.' });
    }

    req.tokenId = decoded.id;
    req.tokenName = decoded.name;
    req.tokenEmail = decoded.email;

    return next();
  } catch (error) {
    return res.status(401).json({ error: 'Não autorizado.' });
  }
};
