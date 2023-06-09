const express = require('express');
const { eventsRoute } = require('./routes/eventsRoute');
const { categoryRoute } = require('./routes/categoryRoute');
const { seatsRoute } = require('./routes/seatsRoute');
const { default: mongoose } = require('mongoose');
const app = express();
const cors = require('cors');
const { connectDb } = require('./config/db');
require('dotenv').config()
const path = require("path");
const fileUpload = require("express-fileupload");



app.use(express.urlencoded({ extended: false }));
app.use(fileUpload());

app.use(cors({
  origin: 'http://localhost:3000'
}));
app.use(express.static(path.join(__dirname, "imgs")));


connectDb();
app.use(express.json())


app.use('/api/events', eventsRoute)
app.use('/api/category', categoryRoute)
app.use('/api/seats', seatsRoute)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
