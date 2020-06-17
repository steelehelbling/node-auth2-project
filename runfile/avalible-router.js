const router = require("express").Router();

const Users = require("./avalible-model");
const restricted = require("./auth-restricted-middleware");

router.get("/", restricted, checkdepartment("financeDepartment"), (req, res) => {
  Users.find()
    .then((users) => {
      res.status(200).json({ users, decodedToken: req.decodedToken });
    })
    .catch((err) => res.send(err));
});

function checkdepartment(department) {
  return (req, res, next) => {
    if (req.decodedToken.department === department) {
      next();
    } else {
      res.status(403).json({ message: "You shall not pass! you are wrong department" });
    }
  };
}

module.exports = router;
