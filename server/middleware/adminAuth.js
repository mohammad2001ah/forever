import jwt from 'jsonwebtoken';

const adminAuth = (req, res, next) => {
  try {
    const token = req.header('Authorization').replace('Bearer ', '');
    if (!token) {
      return res.status(401).json({ message: 'No token, authorization denied' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (decoded.email !== process.env.ADMIN_EMAIL) {
      return res.status(403).json({ message: 'Access denied, not an admin' });
    }

    req.admin = decoded;
    next();
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
}
export default adminAuth;