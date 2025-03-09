const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Serve static files (if needed)
app.use(express.static('public'));

// Default route
app.get('/', (req, res) => {
  res.send('Welcome to the Cancer Support Chat!');
});

// Handle Socket.IO connections
io.on('connection', (socket) => {
  console.log('New client connected');

  // Join a room based on cancer type
  socket.on('join room', (cancerType) => {
    socket.join(cancerType);
    console.log(`Client joined room: ${cancerType}`);
  });

  // Handle chat messages within rooms
  socket.on('chat message', ({ msg, cancerType }) => {
    io.to(cancerType).emit('chat message', msg);
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
