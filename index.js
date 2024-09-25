const express = require('express');
const app = express();

const saltLogger = function (req, res, next) {
    console.log(`salt> ${req.method} - ${req.url}`)
    next()
}

app.use(saltLogger)
app.use(express.static('static'))

app.get('/', (req, res) => {
  res.send('Hello fellow developer!');
});

const port = 3000
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});