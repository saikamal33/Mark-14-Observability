const express = require('express');
const app = express();
const port = 3001;

app.get('/', (req, res) => {
  console.log(`[NodeApp] Request received at ${new Date().toISOString()}`);
  res.send('Hello from Node.js app!');
});

app.listen(port, () => {
  console.log(`[NodeApp] Server is running on port ${port}`);
});

