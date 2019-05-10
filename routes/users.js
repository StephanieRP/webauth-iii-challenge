const router = require("express").Router();

const users = require("./users-model.js");
const restricted = require("../auth/middleware.js");

// get all users /api/users
router.get("/", restricted, (req, res) => {
  users
    .find()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});

module.exports = router;
