module.exports.authorization = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    return res.status(403).json({message: "User not found", status: 404});
  }
  try {
    const data = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req._id = data._id;
    return next();
  } catch {
    return res.status(403).json({ message: "User not found", status: 404 });
  }
};
