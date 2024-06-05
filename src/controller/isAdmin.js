export default function isAdmin(req, res, next) {
  if (req.user.role === "Admin" || parseInt(req.params.id) === req.user.userID) {
    next();
  } else {
    return res.status(403).json({ message: "Forbidden access" });
  }
}
