const express = require('express');
const app = express();

const db = [
    {
        id: 1, name: 'Daniel Dev', email: 'Daniel.Hormos@outlook.com'
    },
    {
        id: 2, name: 'Ali dev', email: 'ali@yahoo.se'
    }
]

app.use(express.json())

app.get('/api/developers', (req, res) => {
  res.json(db);
});

app.get('/api/developers/:id', (req, res) => {
    const dev = db.find(dev => dev.id == req.params.id)
    return dev ? res.json(dev) : res.status(404).end()
});

app.post('/api/developers/', (req, res) => {
    const newDeveloper = {
      id: db.length + 1,
      name: req.body.name,
      email: req.body.email,
    };
  
    db.push(newDeveloper);
  
    res
      .status(201)
      .setHeader('location', `/api/developers/${newDeveloper.id}`)
      .json(newDeveloper);
});

app.delete('/api/developers/:id', (req, res) => {
    const userId = parseInt(req.params.id)
    const userIndex = db.findIndex(d => d.id === userId)

    if(userIndex !== -1){
        db.splice(userIndex, 1)
        res.send(db)
    }
    res.status(204).send('Users Not found')
})

app.patch('/api/developers/:id', (req, res) => {
    const developerId = parseInt(req.params.id)
    const {name, email} = req.body
    const developer = db.find(d => d.id === developerId) 

    if(developer){
        developer.name = name
        developer.email = email

        res.send(db)
    } else {
        res.status(404).send('Developer not found')
    }
})

const port = 3000
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});