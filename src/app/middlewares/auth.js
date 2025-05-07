import jwt from "jsonwebtoken";
import authConfig from '../../app/middlewares/auth.js';

function authMiddleware(request, response, next) {
  const authToken = request.headers.authorization;

  if (!authToken) {
    return response.status(401).json({ error: "Token not provided" });
  }


  const token = authToken.split(" ")[1];

  jwt.verify(token, authConfig.secret, (err, decoded) => {
    if (err) {
      return response.status(401).json({ error: "Token is invalid" });
    }


    request.userId = decoded.id;
    request.userName = decoded.name;


    next();
  });
}

export default authMiddleware;
