const jwt = require("jsonwebtoken");
/**
 * @param req
 * @param res
 * @param next
 *
 * Token shield helps us to check whether req.body has a Token inside it
 */
function TokenShield(req, res, next) {
  const { token } = req.headers;
  if (token) {
    try {
      const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
      if (decodedToken) {
        req.headers.decodedToken = decodedToken;
        next();
      }
    } catch (error) {
      return res.status(500).send({
        success: false,
        message: "Something went wrong",
      });
    }
  } else {
    return res.status(401).send({
      success: false,
      message: "Token missing or expired",
    });
  }
}

module.exports = TokenShield;
