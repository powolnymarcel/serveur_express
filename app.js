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



//Après avoir installé express avec npm
//On appelle express
var express = require('express');

//Tout ce que l'on fera avec express sera assigné à la variable "app"
var app = express();

//créer une route, cette route aura en param requete et response
app.get('/',function(req,res){
	res.send('Bonjour !')
});
app.get('/contact',function(req,res){
	res.send('<h1>Contactez-nous!</h1>')
});

// On indique que l'on va écouter sur le port 3000 et on va lancer la fn
app.listen(3000,function(){
console.log('Je suis le consoleLog -> serveur démarré sur le port 3000');
});
