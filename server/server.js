const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const path = require('path');
const authController = require('./controllers/authController');
const gameController = require('./controllers/gameController');
const app = express();

const PORT =process.env.PORT || 6000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(bodyParser.json());

app.use((req, res, next) => {
  if (req.url.endsWith('.br')) {
    res.set('Content-Encoding', 'br');
    if (req.url.endsWith('.js.br')) {
      res.set('Content-Type', 'application/javascript');
    } else if (req.url.endsWith('.wasm.br')) {
      res.set('Content-Type', 'application/wasm');
    } else if (req.url.endsWith('.data.br')) {
      res.set('Content-Type', 'application/octet-stream');
    }
  }
  next();
});

app.use(express.static(path.join(__dirname, '../build')));
app.use(express.static(path.join(__dirname, '../src')));

// Routes
app.post('/api/login', authController.login);
app.post('/api/saveGameState', gameController.saveGameState);
// app.get('/api/getGameState', gameController.getGameState); //기존코드
app.get('/api/getGameState/:userId', gameController.getGameState); //(+)수정한 코드
app.post('/api/checkUserId', authController.checkUserId);

// app.get('/api/loadProgress', gameController.loadProgress);
// app.post('/api/saveProgress',gameController.saveProgress); 

app.get('/webgl', (req, res) => {
  res.sendFile(path.join(__dirname, '../build', 'webgl.html'));
});
//기존 코드
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build', 'index.html'));
  });
  


  // WebGL 페이지 HTML 서빙

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: '서버 오류가 발생했습니다.' });
  });
  

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
