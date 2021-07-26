const express = require('express');

const app = express();

app.get('/', (req, res) => {
    return res.json({
        gray: "#cc0000"
    });
});

app.listen('3038');