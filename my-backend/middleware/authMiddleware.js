import { verify } from 'jsonwebtoken';

const authMiddleware = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  const JWT_SECRET = process.env.JWT_SECRET; // Ensure this is in your .env

  if (!token) {
    return res.status(401).json({ error: 'Authentication failed' });
  }

  try {
    const decoded = verify(token, JWT_SECRET);
    req.userId = decoded.userId;
    next();
  } catch (err) {
    res.status(401).json({ error: 'Invalid token' });
  }
};

export default authMiddleware;
