const express = require('express');
const app = express();

const db = [
    {
        id: 1,
        name: 'Daniel Dev',
        email: 'Daniel.Hormos@outlook.com'
    },
    {
        id: 2,
        name: 'Ali dev',
        email: 'ali@yahoo.se'
    }
]

app.get('/api/developers/:id', (req, res) => {
    const dev = db.find(dev => dev.id == req.params.id)
    return dev ? res.json(dev) : res.status(404).end()
});

const port = 3000
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});