const express = require('express');
const api = require('./controllers/index');


const app = express();

const port = 3000;

app.use('/api', api);

app.listen(port, () => console.log(`app is listening in port ${port}`));