require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const Product = require('./models/Product');

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Error connecting to MongoDB:', err);
});   

app.use(express.json());

app.get('/health', (req, res) => {
    res.status(200).json({ status: 'ok' });
});

app.listen(process.env.PORT || 3002, () => {
    console.log(`Server is running on port ${process.env.PORT || 3001}`);
})
