//Exemple basique
//		//module http
//		var http = require('http');
//
//		http.createServer(function (req, res) {
//			//envoie au navigateur le code 200 ainsi que le type de data
//			res.writeHead(200, {'Content-Type': 'text/plain'});
//			// Fin de la réponse en envoyant aussi un message
//			res.end('Hello World\n');
//			//Va lancer le serveur sur le port 1337
//		}).listen(1337, "127.0.0.1");
//
//		//Indique dans le console que le serveur tourne
//		console.log('Server running at http://127.0.0.1:1337/');
