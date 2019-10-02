const express = require('express');

const app = express();

app.get('/', (req, res) => {
    return res.json({ message: 'Hello World my friend'});
});

app.listen(3333);
