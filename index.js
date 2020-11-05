/* Setup Express Js */
	var express = require('express')
	var app = express()

/* Express Config */
	app.listen(8000)

/* Webpages */
	app.get('/', function (req, res) {
  	res.send("<!DOCTYPE html><html lang='en'><head><meta charset='UTF-8'><meta name='viewport' content='width=device-width, initial-scale=1'><meta name='Description' content='Wgyt&#39;s website'><meta name='theme-color' content='red'/><title>Wgyt | Home</title><style>@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap');.css-selector {font-family: 'Montserrat', Arial;}h1 {color: red;font-family: Montserrat;font-size: 60px;}h2 {color: rgb(97,97,97);font-family: Montserrat;font-size: 45px;}h3 {color: rgb(97,97,97);font-family: Montserrat;font-size: 35px;}button {background-color: red;border: none;color: white;padding: 15px 32px;text-align: center;text-decoration: none;display: inline-block;font-size: 14px;cursor: pointer;transition-duration: 0.4s;}button:hover {background-color: black;color: red;}p {color: rgb(97,97,97);font-family: Montserrat;font-size: 25px;}.center {text-align: center;display: flex;justify-content: center;align-items: center;}hr {border: 3px dashed red;border-radius: 5px;}</style><h1>Wgyt</h1><div><a href='home'><button>Home</button></a><a href='about'><button>About</button></a><a href='wp'><button>Blog</button></a><a href='scratch'><button>Scratch</button></a><a href='sitemap'><button>Sitemap</button></a></div></header><hr><h2>Welcome to my website</h2><hr><h3>About Me:</h3><p>Hi there, I'm Wgyt. I code using Scratch, Html, Css and Python 3.</p><a href='about'><button>Read More About Wgyt</button></a><hr><p>Links:</p><a href='https://scratch.mit.edu/users/wgyt'><button>Scratch</button></a><a href='styles.css'><button>CSS File</button></a></body></html>")
	})
	app.get('/home', function (req, res) {
  	res.send("<!DOCTYPE html><html lang='en'><head><meta charset='UTF-8'><meta name='viewport' content='width=device-width, initial-scale=1'><meta name='Description' content='Wgyt&#39;s website'><meta name='theme-color' content='red'/><title>Wgyt | Home</title><style>@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap');.css-selector {font-family: 'Montserrat', Arial;}h1 {color: red;font-family: Montserrat;font-size: 60px;}h2 {color: rgb(97,97,97);font-family: Montserrat;font-size: 45px;}h3 {color: rgb(97,97,97);font-family: Montserrat;font-size: 35px;}button {background-color: red;border: none;color: white;padding: 15px 32px;text-align: center;text-decoration: none;display: inline-block;font-size: 14px;cursor: pointer;transition-duration: 0.4s;}button:hover {background-color: black;color: red;}p {color: rgb(97,97,97);font-family: Montserrat;font-size: 25px;}.center {text-align: center;display: flex;justify-content: center;align-items: center;}hr {border: 3px dashed red;border-radius: 5px;}</style></head><body><header class='center'><h1>Wgyt</h1><div><a href='home'><button>Home</button></a><a href='about'><button>About</button></a><a href='wp'><button>Blog</button></a><a href='scratch'><button>Scratch</button></a><a href='sitemap'><button>Sitemap</button></a></div></header><hr><h2>Welcome to my website</h2><hr><h3>About Me:</h3><p>Hi there, I'm Wgyt. I code using Scratch, Html, Css and Python 3.</p><a href='about'><button>Read More About Wgyt</button></a><hr><p>Links:</p><a href='https://scratch.mit.edu/users/wgyt'><button>Scratch</button></a><a href='styles.css'><button>CSS File</button></a></body></html>")
	})
	app.get('/about', function (req, res) {
  	res.send("<!doctype html><head><meta charset='UTF-8'><meta name='viewport' content='width=device-width, initial-scale=1'><meta name='Description' content='Wgyt&#39;s website'><meta name='theme-color' content='red'/><title>Wgyt | Blog</title><style>@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap');.css-selector {font-family: 'Montserrat', Arial;}h1 {color: red;font-family: Montserrat;font-size: 60px;}h2 {color: rgb(97,97,97);font-family: Montserrat;font-size: 45px;}h3 {color: rgb(97,97,97);font-family: Montserrat;font-size: 35px;}button {background-color: red;border: none;color: white;padding: 15px 32px;text-align: center;text-decoration: none;display: inline-block;font-size: 14px;cursor: pointer;transition-duration: 0.4s;}button:hover {background-color: black;color: red;}p {color: rgb(97,97,97);font-family: Montserrat;font-size: 25px;}.center {text-align: center;display: flex;justify-content: center;align-items: center;}hr {border: 3px dashed red;border-radius: 5px;}</style></head><body><h1>Coming Soon</h1><h2><a href='/./home'>Go home</a></h2></body>")
	})
	app.get('/scratch', function (req, res) {
  	res.send("<!DOCTYPE html><html lang='en'><head><meta charset='UTF-8'><meta name='viewport' content='width=device-width, initial-scale=1'><meta name='Description' content='Wgyt&#39;s website'><meta name='theme-color' content='red'/><title>Wgyt | Home</title><style>@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap');.css-selector {font-family: 'Montserrat', Arial;}h1 {color: red;font-family: Montserrat;font-size: 60px;}h2 {color: rgb(97,97,97);font-family: Montserrat;font-size: 45px;}h3 {color: rgb(97,97,97);font-family: Montserrat;font-size: 35px;}button {background-color: red;border: none;color: white;padding: 15px 32px;text-align: center;text-decoration: none;display: inline-block;font-size: 14px;cursor: pointer;transition-duration: 0.4s;}button:hover {background-color: black;color: red;}p {color: rgb(97,97,97);font-family: Montserrat;font-size: 25px;}.center {text-align: center;display: flex;justify-content: center;align-items: center;}hr {border: 3px dashed red;border-radius: 5px;}</style></head><body><header class='center'><h1>Wgyt</h1><div><a href='home'><button>Home</button></a><a href='/./about'><button>About</button></a><a href='/./wp'><button>Blog</button></a><a href='/./scratch'><button>Scratch</button></a><a href='/./sitemap'><button>Sitemap</button></a></div></header><hr><h2>Scratch</h2><hr><h3>Galactica Os Beta X.1</h3><iframe src='https://scratch.mit.edu/projects/415729079/embed' allowtransparency='true' width='485' height='402' frameborder='0' scrolling='no' allowfullscreen></iframe></body></html>")
	})
	app.get('/%E0%B6%9E', function (req, res) {
  	res.send("AMONG US")
	})
	app.get('/wp', function (req, res) {
  	res.send("<!DOCTYPE html><html lang='en'><head><meta charset='UTF-8'><title>Wgyt | Home</title><style>@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap');.css-selector {font-family: 'Montserrat', Arial;}h1 {color: red;font-family: Montserrat;font-size: 60px;}h2 {color: rgb(97,97,97);font-family: Montserrat;font-size: 45px;}h3 {color: rgb(97,97,97);font-family: Montserrat;font-size: 35px;}button {background-color: red;border: none;color: white;padding: 15px 32px;text-align: center;text-decoration: none;display: inline-block;font-size: 14px;cursor: pointer;transition-duration: 0.4s;}button:hover {background-color: black;color: red;}p {color: rgb(97,97,97);font-family: Montserrat;font-size: 25px;}.center {text-align: center;display: flex;justify-content: center;align-items: center;}hr {border: 3px dashed red;border-radius: 5px;}</style><meta http-equiv='refresh' content='0; url=https://www.wgyt.tk/'></head></html>")
	})
	app.get('/sitemap', function (req, res) {
  	res.send("<!DOCTYPE html><html lang='en'><head><meta charset='UTF-8'><title>Wgyt | Home</title><style>@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap');.css-selector {font-family: 'Montserrat', Arial;}h1 {color: red;font-family: Montserrat;font-size: 60px;}h2 {color: rgb(97,97,97);font-family: Montserrat;font-size: 45px;}h3 {color: rgb(97,97,97);font-family: Montserrat;font-size: 35px;}button {background-color: red;border: none;color: white;padding: 15px 32px;text-align: center;text-decoration: none;display: inline-block;font-size: 14px;cursor: pointer;transition-duration: 0.4s;}button:hover {background-color: black;color: red;}p {color: rgb(97,97,97);font-family: Montserrat;font-size: 25px;}.center {text-align: center;display: flex;justify-content: center;align-items: center;}hr {border: 3px dashed red;border-radius: 5px;}</style><meta http-equiv='refresh' content='0; url=/sitemap.xml'></head></html>")
	})
	app.get('/sitemap.xml', function(req, res){
		res.send('<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd"><url><loc>https://www.wgyt.tk/</loc><lastmod>2020-11-03T19:04:10+00:00</lastmod><priority>1.00</priority></url><url><loc>https://www.wgyt.tk/home</loc><lastmod>2020-11-03T19:04:10+00:00</lastmod><priority>0.80</priority></url><url><loc>https://www.wgyt.tk/about</loc><lastmod>2020-11-03T19:04:10+00:00</lastmod><priority>0.80</priority></url><url><loc>https://www.wgyt.tk/wp</loc><lastmod>2020-11-03T19:04:10+00:00</lastmod><priority>0.80</priority></url><url><loc>https://www.wgyt.tk/scratch</loc><lastmod>2020-11-03T19:04:10+00:00</lastmod><priority>0.80</priority></url></urlset>')
	})
	app.get("/styles.css", function(req, res){
		res.send("@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap');.css-selector {font-family: 'Montserrat', Arial;}h1 {color: red;font-family: Montserrat;font-size: 60px;}h2 {color: rgb(97,97,97);font-family: Montserrat;font-size: 45px;}h3 {color: rgb(97,97,97);font-family: Montserrat;font-size: 35px;}button {background-color: red;border: none;color: white;padding: 15px 32px;text-align: center;text-decoration: none;display: inline-block;font-size: 14px;cursor: pointer;transition-duration: 0.4s;}button:hover {background-color: black;color: red;}p {color: rgb(97,97,97);font-family: Montserrat;font-size: 25px;}.center {text-align: center;display: flex;justify-content: center;align-items: center;}hr {border: 3px dashed red;border-radius: 5px;}")
	})

/* HTTP Status Pages */

	/* 4xx errors */
	app.get('/400', function(req, res){
		res.status(400).send('400 Bad Request')
	})
	app.get('/401', function(req, res){
		res.status(401).send('401 Unauthorized')
	})
	app.get('/402', function(req, res){
		res.status(402).send('402 Payment Required')
	})
	app.get('/403', function(req, res){
		res.status(403).send('403 Forbidden')
	})
	app.get('/404', function(req, res){
		res.status(404).send('404 Not Found')
	})
	app.get('/405', function(req, res){
		res.status(405).send('405 Method Not Allowed')
	})
	app.get('/406', function(req, res){
		res.status(406).send('406 Not Acceptable')
	})
	app.get('/407', function(req, res){
		res.status(407).send('407 Proxy Authentication Required')
	})
	app.get('/408', function(req, res){
		res.status(408).send('408 Request Timeout')
	})
	app.get('/409', function(req, res){
		res.status(409).send('409 Conflict')
	})
	app.get('/410', function(req, res){
		res.status(410).send('410 Gone')
	})
	app.get('/411', function(req, res){
		res.status(411).send('411 Length Required')
	})
	app.get('/412', function(req, res){
		res.status(412).send('412 Precondition Failed')
	})
	app.get('/413', function(req, res){
		res.status(413).send('413 Payload Too Large')
	})
	app.get('/414', function(req, res){
		res.status(414).send('414 URI Too Long')
	})
	app.get('/415', function(req, res){
		res.status(415).send('415 Unsupported Media Type')
	})
	app.get('/416', function(req, res){
		res.status(416).send('416 Range Not Satisfiable')
	})
	app.get('/417', function(req, res){
		res.status(417).send('417 Expectation Failed')
	})
	app.get('/418', function(req, res){
		res.status(418).send("418 I'm a teapot")
	})
	app.get('/422', function(req, res){
		res.status(422).send('422 Unprocessable Entity')
	})
	app.get('/425', function(req, res){
		res.status(425).send('425 Too Early')
	})
	app.get('/426', function(req, res){
		res.status(426).send('426 Upgrade Required')
	})
	app.get('/428', function(req, res){
		res.status(428).send('428 Precondition Required')
	})
	app.get('/429', function(req, res){
		res.status(429).send('429 Too Many Requests')
	})
	app.get('/431', function(req, res){
		res.status(431).send('431 Request Header Fields Too Large')
	})
	app.get('/451', function(req, res){
		res.status(451).send('451 Unavailable For Legal Reasons')
	})

	/* 5xx errors */
	app.get('/500', function(req, res){
		res.status(500).send('500 Internal Server Error')
	})
	app.get('/501', function(req, res){
		res.status(501).send('501 Not Implemented')
	})
	app.get('/502', function(req, res){
		res.status(502).send('502 Bad Gateway')
	})
	app.get('/503', function(req, res){
		res.status(503).send('503 Service Unavailable')
	})
	app.get('/504', function(req, res){
		res.status(504).send('504 Gateway Timeout')
	})
	app.get('/505', function(req, res){
		res.status(505).send('505 HTTP Version Not Supported')
	})
	app.get('/506', function(req, res){
		res.status(506).send('506 Variant Also Negotiates')
	})
	app.get('/507', function(req, res){
		res.status(507).send('507 Insufficient Storage')
	})
	app.get('/508', function(req, res){
		res.status(508).send('508 Loop Detected')
	})
	app.get('/510', function(req, res){
		res.status(510).send('510 Not Extended')
	})
	app.get('/511', function(req, res){
		res.status(511).send('511 Network Authentication Required')
	})
	app.get('/735', function(req, res){
		res.status(735).send('735: Wgyt735yt was here')
	})
