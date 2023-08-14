const router = require('express').Router();
const fileUploader = require('../config/cloudinary.config');
const User = require('../models/User.model');

router.get('/users', (req, res, next) => {
  //current user
});

router.put('/users', async (req, res, next) => {
  try {
    const { user, image } = req.body;

    if (!image) {
      return res.status(200).json({ message: 'No picture provided' });
    }

    const updatedUser = await User.findByIdAndUpdate(
      user._id,
      { image: image },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ message: 'Image updated successfully', user: updatedUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred' });
  }
});

router.post('/upload', fileUploader.single('imageUrl'), (req, res, next) => {
  if (!req.file) {
    next(new Error('No file Uploaded!'));
    return;
  }

  res.json({ fileUrl: req.file.path });
});

module.exports = router;
