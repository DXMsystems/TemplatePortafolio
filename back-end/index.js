const express = require('express');
const app = express();
const PORT = 8000;

app.get('/', (req,res) => res.send('test'));
app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});