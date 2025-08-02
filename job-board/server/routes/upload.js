const express = require('express');
const multer = require('multer');
const path = require('path');
const auth = require('../middleware/auth');

const router = express.Router();
const upload = multer({ dest: path.join(__dirname, '../../uploads') });

router.post('/', auth, upload.single('resume'), (req, res) => {
  res.json({ message: 'Resume uploaded', file: req.file });
});

module.exports = router;