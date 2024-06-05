export default function isAdmin(req, res, next) {
  console.log(req.user, "isadmin");
  if (req.user.role === "Admin") {
    next();
  } else {
    return res.status(403).json({ message: "Forbidden access" });
  }
}
