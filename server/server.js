const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.render('client/index');
});

app.get('/api/register', (req, res) => {
    res.json({
        data: 'you hit register endpoint bruh'
    });
});

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`API is running on port ${port}`));