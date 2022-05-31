const express = require('express');
const app = express();
const PORT = 4000;

// fake databse
const creatives = ['John', 'Jim', 'James'];

// routes/controllers
app.get('/creatives/:creativesIndex', (req, res) => { res.send(creatives[req.params.creativesIndex]);});

app.listen(PORT, () => console.log(`Listening, watching, and learning to take over the human race on port ${PORT}`));