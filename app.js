const express = require('express');

const app = express();

app.get('/', function (req,res) {

	res.send("Hola Mundo!!")
});

app.listen(8000);

function suma(a, b) {
	return a + b;
}

let resultado = suma(3,5);


/*
const http = require('http');

const host = 'localhost';
const port = 8000;

const requestListener = function(request, response) {

	response.writeHead(400);
	response.end(`Mi primer servidor!
		${response}, ${request}`);
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
	console.log(`Server is running on http://${host}:${port}`);
});
*/