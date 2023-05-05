const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  let token = req.headers.authorization;

  if (token) {
    var decoded = jwt.verify(token, "masai");
    try {
      if (decoded) {
        req.body.authorID = decoded.authorID;
        next();
      } else {
        res.status(400).json({ msg: "Please Login!!" });
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  } else {
    res.status(400).json({ msg: "Please Login!!" });
  }
};

module.exports = { auth };
