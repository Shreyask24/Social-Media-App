const express = require('express');
const multer = require('multer');
const User = require('../models/User');
const router = express.Router();
const path = require('path');

// Multer setup for file storage
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        // Ensure that the destination path is absolute
        cb(null, path.join(__dirname, '../uploads/'));
    },
    filename: function (req, file, cb) {
        // Save file with unique timestamp
        cb(null, Date.now() + path.extname(file.originalname));
    },
});
const upload = multer({ storage: storage });

// User form submission route
router.post('/submit', upload.array('images', 10), async (req, res) => {
    try {
        const { name, socialHandle } = req.body;
        // Store relative paths to the uploaded images
        const imagePaths = req.files.map(file => `/uploads/${file.filename}`);

        const newUser = new User({
            name,
            socialHandle,
            images: imagePaths,
        });

        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ error: 'Error submitting form' });
    }
});


// Get all user submissions (for Admin Dashboard)
router.get('/submissions', async (req, res) => {
    try {
        const users = await User.find({});
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching data' });
    }
});

module.exports = router;
