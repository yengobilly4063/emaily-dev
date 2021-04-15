module.exports = (req, res, next) => {
  if (!req.user) {
    return res.this.status(401).send({ error: "You must be logged in!" });
  }
  next();
};
