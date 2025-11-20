// replace your adminAuth.js with this
import jwt from 'jsonwebtoken';

const adminAuth = (req, res, next) => {
  try {
    // header may be in req.headers.authorization (lowercase) or req.header('Authorization')
    const authHeader = req.headers?.authorization || req.header('Authorization');

    if (!authHeader) {
      return res.status(401).json({ message: 'No token provided, authorization denied' });
    }

    // authHeader might be 'Bearer <token>' or just the token
    const token = authHeader.startsWith('Bearer ')
      ? authHeader.slice(7).trim()
      : authHeader.trim();

    if (!token) {
      return res.status(401).json({ message: 'Invalid token, authorization denied' });
    }

    let decoded;
    try {
      decoded = jwt.verify(token, process.env.JWT_SECRET);
    } catch (err) {
      return res.status(401).json({ message: 'Token is not valid' });
    }

    // Check admin email (ensure ADMIN_EMAIL is set in env)
    if (!decoded?.email || decoded.email !== process.env.ADMIN_EMAIL) {
      return res.status(403).json({ message: 'Access denied, not an admin' });
    }

    req.admin = decoded;
    next();
  } catch (error) {
    // don't leak internal error details
    console.error('adminAuth error:', error);
    res.status(500).json({ message: 'Server error' });
  }
}

export default adminAuth;
