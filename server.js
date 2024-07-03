const express = require('express');
const path = require('path');
const app = express();
const port = 3001;


app.use(express.static(path.join(__dirname)));

// routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'home.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'about.html'));
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'contact.html'));
});


app.listen(port, () => {
  console.log(`Server is successfully (: running on http://localhost:${port}`);
});
