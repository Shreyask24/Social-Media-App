const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const path = require('path');

const app = express()
require('dotenv').config()

const PORT = process.env.PORT || 3000
const MONGO_URL = process.env.MONGO_URL

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

mongoose.connect(MONGO_URL)

// Routes
app.use('/api/users', userRoutes);
app.use('/uploads', express.static('uploads'));


app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`)
})