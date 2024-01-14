const MODIFIERS = ["admin", "super-admin"];

const jwt = require("jsonwebtoken");
/**
 * @param req
 * @param res
 * @param next
 *
 * Token shield helps us to check whether req.body has a Token inside it
 */
function AuthorizationShield(req, res, next) {
  const { role } = req.headers.decodedToken;
  let authFrequency = 0;
  for (let x in role) {
    if (MODIFIERS.includes(role[x])) {
      authFrequency++;
    }
  }
  if (authFrequency > 0) {
    delete req.headers.decodedToken;
    next();
  } else {
    return res.status(403).json({
      success: false,
      message: "You are not authorized to access this resource",
    });
  }
}

module.exports = AuthorizationShield;
