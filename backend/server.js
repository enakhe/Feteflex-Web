const express = require('express');
const path = require('path');
const dotenv = require('dotenv').config();
const colors = require('colors');

const connectDB = require('./config/db');
const { errorHandler } = require('./middleware/errorMiddleware');
const cors = require('cors')

const port = process.env.PORT;
const app = express();

connectDB();

// Middleware for JSON body parsing
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors())

// Middleware for Routes
app.use('/api/waitList', require('./routes/waitListRoutes'));

// Serve frontend routes
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../frontend/dist')));
    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, '../', 'frontend', 'dist', 'index.html')));
} else {
    app.get('/', (req, res) => res.send('Please set to production'));
}

// Middleware for error handling
app.use(errorHandler);

// Deployment to server
app.listen(port, () => console.log(`Server listening on http://localhost:${port}`));