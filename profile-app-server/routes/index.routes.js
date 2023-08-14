const router = require('express').Router();
const { isAuthenticated } = require('../middleware/jwt.middleware')
const fileUploader = require('../config/cloudinary.config')

router.get('/users', (req, res, next) => {
  //current user
});

router.put('/users', (req, res, next) => {
  //current user
})

router.post('/upload', fileUploader.single("imageUrl"), (req, res, next) => {
  if (!req.file) {
    next(new Error("no file uploaded"))
    return
  }

  res.json({ fileUrl: req.file.path })
})

module.exports = router;
