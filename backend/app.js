const cors = require('cors');
const express = require('express');
const { Server } = require('socket.io');
const { createServer } = require('http');
const connectDB = require('./config/db.js');
const userRouter = require('./routes/userRoute.js');
const authenticateUser = require('./middlewares/authenticateUser.js');
const authorizeUser = require('./middlewares/authorizeUser.js');
require('dotenv').config();

const app = express();

// Web Socket server initialization
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
  },
});

const PORT = process.env.PORT || 4000;

const allowedOrigins = ['http://localhost:5173', 'http://localhost:3000'];
const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

// Use CORS middleware with the specified options
app.use(cors(corsOptions));

// Function to connect to mongodb database
connectDB();

// This middleware helps parse that JSON data and make it available in the req.body object of your route handlers.
app.use(express.json());

app.get('/test', (req, res) => {
  res.status(200).json({ msg: 'Server is UP. working perfectly fine' });
});

// User Routes
app.use('/auth', userRouter);

// Apply authentication middleware to protected routes
app.use('/user', authenticateUser, (req, res) => {
  // Handle protected route logic here
});

// Apply authorization middleware to restricted routes
app.use('/admin', authenticateUser, authorizeUser('admin'), (req, res) => {
  // Handle admin-only route logic here
});

io.on('connection', (socket) => {
  console.log('User connected');

  // Handling events from client
  socket.on('chat-msg', (msg) => {
    console.log(`Received Mesaage : ${msg}`);

    // Broadcasting the received messages to all connected clients
    io.emit('chat-msg', message);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

// Start the server
httpServer.listen(PORT, () => {
  console.log(`🚀Server is running on port ${PORT}`);
});
