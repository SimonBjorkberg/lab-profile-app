const router = require('express').Router();
const User = require('../models/User.model');
const { isAuthenticated } = require('../middleware/jwt.middleware');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const saltRounds = 10;

router.post('/signup', (req, res, next) => {
  const { username, password, campus, course } = req.body;

  const salt = bcrypt.genSaltSync(saltRounds);
  const hashedPassword = bcrypt.hashSync(password, salt);

  const user = { username, password: hashedPassword, campus, course };

  User.create(user)
    .then((response) => {
      res.status(201).json(response);
    })
    .catch((err) => console.log(err));
});

router.post('/login', (req, res, next) => {
  const { username, password } = req.body;
  User.findOne({ username }).then((foundUser) => {
    const { username, campus, course, image, _id } = foundUser;
    const passwordCorrect = bcrypt.compareSync(password, foundUser.password);

    if (passwordCorrect) {
      const payload = { username, campus, course, image, _id };

      const authToken = jwt.sign(payload, process.env.TOKEN_SECRET, {
        algorithm: 'HS256',
        expiresIn: '6h',
      });

      res.status(200).json({ authToken });
    } else {
      res.status(401).json({ message: 'Wrong password' });
    }
  });
});

router.get('/verify', isAuthenticated, (req, res, next) => {
  res.status(200).json(req.payload);
});

module.exports = router;
