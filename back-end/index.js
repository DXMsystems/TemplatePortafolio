const express = require('express');
const res = require('express/lib/response');
const app = express();
const PORT = 8000;

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', (req,res) => res.send('test'));

app.post('/contact-us', (req, res) => {
  console.log(req.body)
  res.status(201).send('expects JSON with name, email, subj, msg')
})

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});

