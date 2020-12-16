const express = require('express');
const app = express();

app.get('/', (req, res) => {
	res.send('hello from the root!!!!!!');
});

app.get('/pete', (req, res) => {
	res.send('hello pete');
});

const Port = process.env.PORT || 7165;

app.listen(Port, () => {
	console.log('Listening on PORT ', Port);
});