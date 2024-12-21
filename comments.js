// Create web server
// npm install express
const express = require('express');
const app = express();
app.use(express.static('public'));

// Create a new comment
app.post('/comments', function (req, res) {
  const comment = {
    id: 1,
    text: 'Hello, world!',