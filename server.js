const express = require('express');
const app = express();

const Port = process.env.PORT || 7165;

app.listen(Port, () => {
	console.log('Listening on PORT ', Port);
});