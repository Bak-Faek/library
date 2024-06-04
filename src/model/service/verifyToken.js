import jwt from "jsonwebtoken";

export default function verifyToken(req, res, next) {
    if(!req.headers.authorization){
        return res.status(403).json({
            message: "you need a token",
          });
    }
  const token = req.headers.authorization.split(" ")[1];
  console.log(token, "Header");
  jwt.verify(token, "secret", (err, decoded) => {
    if (!token) {
      return res.status(403).json({
        message: "you need a token",
      });
    }
    if (err) {
      return res.status(403).json({
        message: "invalid token",
      });
    }
    console.log(decoded, 'decoded');
    req.user = {userID : decoded.userId, email : decoded.email };
    next();
  });
  
}
