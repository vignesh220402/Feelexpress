const express = require('express');
const Parser = require('body-parser');
const path = require('path');
const majorapp = express();
const port = 9090;

majorapp.use(Parser.urlencoded({ extended: false }));
majorapp.use(express.static('public'));

majorapp.get('/reg', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

majorapp.post('/login', (req, res) => {
    const { user, pass } = req.body;
    res.redirect(`/login.html?user=${encodeURIComponent(user)}&pass=${encodeURIComponent(pass)}`);
});

majorapp.listen(port, () => {
    console.log(`Let set go http://localhost:${port}`);
});
