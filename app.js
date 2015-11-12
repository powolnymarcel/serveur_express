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
//*************************************************************************************
//		//Exemple basique 2
//		//Après avoir installé express avec npm
//		//On appelle express
//		var express = require('express');
//
//		//Tout ce que l'on fera avec express sera assigné à la variable "app"
//		var app = express();
//
//		//créer une route, cette route aura en param requete et response
//		app.get('/',function(req,res){
//			res.send('Bonjour !')
//		});
//		app.get('/contact',function(req,res){
//			res.send('<h1>Contactez-nous!</h1>')
//		});
//
//		// On indique que l'on va écouter sur le port 3000 et on va lancer la fn
//		app.listen(3000,function(){
//		console.log('Je suis le consoleLog -> serveur démarré sur le port 3000');
//		});
//*************************************************************************************
//		//Exemple basique 3
//		//Après avoir installé express avec npm
//		//On appelle express
//		var express = require('express');
//
//		//permettra d'avoir le path absolu
//		var path=require('path');
//
//		//Tout ce que l'on fera avec express sera assigné à la variable "app"
//		var app = express();
//		//créer une route, cette route aura en param requete et response
//		app.get('/',function(req,res){
//			//On indique ici que l'on veut le path absolu du fichier
//			res.sendFile(path.join(__dirname,'index.html'));
//		});
//		app.get('/contact',function(req,res){
//						//On indique ici que l'on veut le path absolu du fichier
//			res.sendFile(path.join(__dirname,'contact.html'));
//		});
//		app.get('/services',function(req,res){
//			//On indique ici que l'on veut le path absolu du fichier
//			res.sendFile(path.join(__dirname,'services.html'));
//		});
//		// On indique que l'on va écouter sur le port 3000 et on va lancer la fn
//		app.listen(3000,function(){
//			console.log('Je suis le consoleLog -> serveur démarré sur le port 3000');
//		});
//*************************************************************************************
//		//Exemple basique 4
//		//Après avoir installé express avec npm
//		//On appelle express
//		var express = require('express');
//
//		//permettra d'avoir le path absolu
//		var path=require('path');
//
//		//Tout ce que l'on fera avec express sera assigné à la variable "app"
//		var app = express();
//
//		//utilise les middleware pour indiquer le path statique, donc dans le dossier public on aura les "html" il n'y aura plus qu'à indiquer dans l'url, ex : contact.html
//		//permet de faire du site statique facilement et rapidement, il suffira juste de placer des html dans le dossier public
//		app.use(express.static(path.join(__dirname,'public')));
//
//
//		// On indique que l'on va écouter sur le port 3000 et on va lancer la fn
//		app.listen(3000,function(){
//			console.log('Je suis le consoleLog -> serveur démarré sur le port 3000');
//		});

//*************************************************************************************
//		//Exemple basique 5  REPONSE JSON + download + redirect
//		//Après avoir installé express avec npm
//		//On appelle express
//		var express = require('express');
//
//		//permettra d'avoir le path absolu
//		var path=require('path');
//
//		//Tout ce que l'on fera avec express sera assigné à la variable "app"
//		var app = express();
//
//			//utilise les middleware pour indiquer le path statique, donc dans le dossier public on aura les "html" il n'y aura plus qu'à indiquer dans l'url, ex : contact.html
//			//permet de faire du site statique facilement et rapidement, il suffira juste de placer des html dans le dossier public
//			app.use(express.static(path.join(__dirname,'public')));
//
//		app.get('/personnel',function(req,res){
//			var personnel=[
//				{
//					prenom:'marcel',
//					nom:'powolny',
//					telephone:'0032342351342',
//					age:27,
//					sexe:'homme'
//				},
//				{
//					prenom:'Pascal',
//					nom:'powolny',
//					telephone:'0032222222222',
//					age:24,
//					sexe:'homme'
//				},
//				{
//					prenom:'Jhonny',
//					nom:'powolny',
//					telephone:'333333333',
//					age:44,
//					sexe:'homme'
//				}
//			];
//			//Permettre l'accès au fichier JSON via --> http://127.0.0.1:3000/personnel et on peut faire ce u'on veut avec ça
//			// le graph FB et l'API de youtube fonctionnent comme ça
//			res.json(personnel);
//		});
//
//		//Permet de telecharger des fichiers
//		app.get('/telechargement', function (req,res) {
//			res.download(path.join(__dirname,'/telechargement/pdf.pdf'));
//		});
//		//Permet le redirect
//		app.get('/contact', function (req,res) {
//			res.redirect('/contact.html')
//		});
//		app.get('/index', function (req,res) {
//			res.redirect('/index.html')
//		});
//		app.get('/services', function (req,res) {
//			res.redirect('/services.html')
//		});
//		// On indique que l'on va écouter sur le port 3000 et on va lancer la fn
//		app.listen(3000,function(){
//			console.log('Je suis le consoleLog -> serveur démarré sur le port 3000');
//		});


//*************************************************************************************
//Exemple basique 6 REQUETE POST
//Après avoir installé express avec npm
//On appelle express
var express = require('express');
var bodyParser=require('body-parser');
//permettra d'avoir le path absolu
var path=require('path');

//Tout ce que l'on fera avec express sera assigné à la variable "app"
var app = express();

//utilise les middleware pour indiquer le path statique, donc dans le dossier public on aura les "html" il n'y aura plus qu'à indiquer dans l'url, ex : contact.html
//permet de faire du site statique facilement et rapidement, il suffira juste de placer des html dans le dossier public
app.use(express.static(path.join(__dirname,'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


// pour récuperer des data en post on a besoin du body parser voir :156 :166 :167, on parse aussi le json...
app.post('/inscription',function(req,res){
	//Permet de récup ne nom du formulaire
	var nom= req.body.nom;
	var email= req.body.email;
	console.log('inscription effectuée pour -> ' + nom + '  @ ' + email);
	 res.redirect('/merci.html')
});

//Permet le redirect
app.get('/contact', function (req,res) {
	res.redirect('/contact.html')
});
app.get('/index', function (req,res) {
	res.redirect('/index.html')
});
app.get('/services', function (req,res) {
	res.redirect('/services.html')
});
// On indique que l'on va écouter sur le port 3000 et on va lancer la fn
app.listen(3000,function(){
	console.log('Je suis le consoleLog -> serveur démarré sur le port 3000');
});
























