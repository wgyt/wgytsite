/* Setup Express Js */
var express = require('express')
var app = express()

/* Express Config */
app.listen(8000)

/* Webpages */
app.get('/', function(req, res) {
	res.send('<!DOCTYPE html><html lang="en-us"><head>	<link crossorigin="anonymous" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" rel="stylesheet">	<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script><script crossorigin="anonymous" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js">	</script>	<meta charset="utf-8">	<meta content="width=device-width" name="viewport">	<meta content="text/html; charset=utf-8" http-equiv="Content-Type">	<link href="/manifest.webmanifest" rel="manifest">	<meta content="#ff0000" name="theme-color">	<title>Wgyt | Home</title>	<meta content="The official website of Wgyt." name="description">	<link href="//cdn.wgyt.tk/images/logo.png" rel="shortcut icon">	<link href="//cdn.wgyt.tk/images/logo.png" rel="apple-touch-icon">	<style>		/* cyrillic-ext */		@font-face {			font-family: "Montserrat";			font-style: normal;			font-weight: 200;			font-display: swap;			src: local("Montserrat ExtraLight"), local("Montserrat-ExtraLight"), url(https://fonts.gstatic.com/s/montserrat/v15/JTURjIg1_i6t8kCHKm45_aZA3gTD_u50.woff2) format("woff2");			unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;		}		/* cyrillic */		@font-face {			font-family: "Montserrat";			font-style: normal;			font-weight: 200;			font-display: swap;			src: local("Montserrat ExtraLight"), local("Montserrat-ExtraLight"), url(https://fonts.gstatic.com/s/montserrat/v15/JTURjIg1_i6t8kCHKm45_aZA3g3D_u50.woff2) format("woff2");			unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;		}		/* vietnamese */		@font-face {			font-family: "Montserrat";			font-style: normal;			font-weight: 200;			font-display: swap;			src: local("Montserrat ExtraLight"), local("Montserrat-ExtraLight"), url(https://fonts.gstatic.com/s/montserrat/v15/JTURjIg1_i6t8kCHKm45_aZA3gbD_u50.woff2) format("woff2");			unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;		}		/* latin-ext */		@font-face {			font-family: "Montserrat";			font-style: normal;			font-weight: 200;			font-display: swap;			src: local("Montserrat ExtraLight"), local("Montserrat-ExtraLight"), url(https://fonts.gstatic.com/s/montserrat/v15/JTURjIg1_i6t8kCHKm45_aZA3gfD_u50.woff2) format("woff2");			unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;		}		/* latin */		@font-face {			font-family: "Montserrat";			font-style: normal;			font-weight: 200;			font-display: swap;			src: local("Montserrat ExtraLight"), local("Montserrat-ExtraLight"), url(https://fonts.gstatic.com/s/montserrat/v15/JTURjIg1_i6t8kCHKm45_aZA3gnD_g.woff2) format("woff2");			unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;		}		body {			font-family: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;			background-color: black;		}		h1 {			color: red;			font-size: 60px;		}		h2 {			color: white;			font-size: 45px;		}		h3 {			color: white;			font-size: 35px;		}		button {				color: red;						text-align: center;			text-decoration: none;			display: inline-block;			font-size: 14px;			cursor: pointer;		}				p {			color: white;			font-size: 25px;		}		.center {			text-align: center;			display: flex;			justify-content: center;			align-items: center;		}		hr {			border: 3px dashed red;			border-radius: 5px;		}		disabled {			cursor: not-allowed;			background-color: gray;		}	</style>	<script type="text/javascript">	   window.addEventListener("load", () => {  if ("serviceWorker" in navigator) {    navigator.serviceWorker.register("service-worker.js");  }});    	</script></head><body cz-shortcut-listen="true">	<nav class="navbar navbar-light bg-light">  <a class="navbar-brand" href="/">    <img src="https://cdn.wgyt.tk/images/logo.png" width="30" height="30" class="d-inline-block align-top" alt="" loading="lazy">    Wgyt  </a>	<ul class="nav nav-pills justify-content-center">		<li class="nav-item"> <a class="nav-link active" href="home">Home</a> </li>		<li class="nav-item"> <a class="nav-link" href="about">About</a> </li>		<li class="nav-item"> <a class="nav-link" href="blog">Blog</a> </li>		<li class="nav-item"> <a class="nav-link" href="scratch" tabindex="-1">Scratch</a> </li>		<li class="nav-item"> <a class="nav-link" href="sitemap" tabindex="-1">Sitemap</a> </li>	</ul>	</nav>	<div class="container">		<hr>		<h2>Welcome to my Wgyt&#39;s website</h2>		<hr>		<h3>About Me:</h3>		<p>Hi there, I"m Wgyt. I code using Scratch, Html, Css and Python 3.</p><a href="about"><button>Read More About Wgyt</button></a>		<hr>		<p>Links:</p><a href="https://scratch.mit.edu/users/wgyt"><button>Scratch</button></a></div></body></html>')
})
app.get('/home', function(req, res) {
	res.send('<meta http-equiv="refresh" content="0; URL=/./" />')
})
app.get('/about', function(req, res) {
	res.send('<html lang="en-us"><head> <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>   <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.min.js" integrity="sha384-w1Q4orYjBQndcko6MimVbzY0tgp4pWB4lZ7lr30WKz0vr/aWKhXdBNmNb5D92v7s" crossorigin="anonymous"></script>    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">	<meta charset="utf-8">	<meta name="viewport" content="width=device-width">	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">	<link rel="manifest" href="/manifest.webmanifest">	<meta name="theme-color" content="#ff0000"> <title>Wgyt | Scratch</title>	<meta name="description" content="The official website of Wgyt.">	<link rel="shortcut icon" href="//cdn.wgyt.tk/images/logo.png">	<link rel="apple-touch-icon" href="//cdn.wgyt.tk/images/logo.png"><style>		/* cyrillic-ext */		@font-face {			font-family: "Montserrat";			font-style: normal;			font-weight: 200;			font-display: swap;			src: local("Montserrat ExtraLight"), local("Montserrat-ExtraLight"), url(https://fonts.gstatic.com/s/montserrat/v15/JTURjIg1_i6t8kCHKm45_aZA3gTD_u50.woff2) format("woff2");			unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;		}		/* cyrillic */		@font-face {			font-family: "Montserrat";			font-style: normal;			font-weight: 200;			font-display: swap;			src: local("Montserrat ExtraLight"), local("Montserrat-ExtraLight"), url(https://fonts.gstatic.com/s/montserrat/v15/JTURjIg1_i6t8kCHKm45_aZA3g3D_u50.woff2) format("woff2");			unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;		}		/* vietnamese */		@font-face {			font-family: "Montserrat";			font-style: normal;			font-weight: 200;			font-display: swap;			src: local("Montserrat ExtraLight"), local("Montserrat-ExtraLight"), url(https://fonts.gstatic.com/s/montserrat/v15/JTURjIg1_i6t8kCHKm45_aZA3gbD_u50.woff2) format("woff2");			unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;		}		/* latin-ext */		@font-face {			font-family: "Montserrat";			font-style: normal;			font-weight: 200;			font-display: swap;			src: local("Montserrat ExtraLight"), local("Montserrat-ExtraLight"), url(https://fonts.gstatic.com/s/montserrat/v15/JTURjIg1_i6t8kCHKm45_aZA3gfD_u50.woff2) format("woff2");			unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;		}		/* latin */		@font-face {			font-family: "Montserrat";			font-style: normal;			font-weight: 200;			font-display: swap;			src: local("Montserrat ExtraLight"), local("Montserrat-ExtraLight"), url(https://fonts.gstatic.com/s/montserrat/v15/JTURjIg1_i6t8kCHKm45_aZA3gnD_g.woff2) format("woff2");			unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;		}		body {			font-family: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;			background-color: black;		}		h1 {			color: red;			font-size: 60px;		}		h2 {			color: white;			font-size: 45px;		}		h3 {			color: white;			font-size: 35px;		}		button {			background-color: white;			color: black;			p		text-align: center;			text-decoration: none;			display: inline-block;			font-size: 14px;			cursor: pointer;		}		button:hover {			background-color:rgb(77,77,77)y;			color: red;		}		p {			color: white;			font-size: 25px;		}		.center {			text-align: center;			display: flex;			justify-content: center;			align-items: center;		}		hr {			border: 3px dashed red;			border-radius: 5px;		}		disabled {			cursor: not-allowed;			background-color: gray;		}	</style>	<script type="text/javascript">		window.addEventListener("load", () => {  if ("serviceWorker" in navigator) {    navigator.serviceWorker.register("service-worker.js");  }});	</script></head><body cz-shortcut-listen="true">	<nav class="navbar navbar-light bg-light">  <a class="navbar-brand" href="/">    <img src="https://cdn.wgyt.tk/images/logo.png" width="30" height="30" class="d-inline-block align-top" alt="" loading="lazy">    Wgyt  </a>	<ul class="nav nav-pills justify-content-center">		<li class="nav-item"> <a class="nav-link" href="home">Home</a> </li>		<li class="nav-item"> <a class="nav-link active" href="about">About</a> </li>		<li class="nav-item"> <a class="nav-link" href="blog">Blog</a> </li>		<li class="nav-item"> <a class="nav-link" href="scratch" tabindex="-1">Scratch</a> </li>		<li class="nav-item"> <a class="nav-link" href="sitemap" tabindex="-1">Sitemap</a> </li>	</ul>	</nav>	<div class="container">		<hr> <h2>Wgyt</h2>		<hr> <h3>About Me</h3>		<p>My name is Wgyt, but you can call me William. I code using Scratch, Html, Css and Python 3. I also work with the awesone team at Scratch Addons.</p>	</div></body></html>')
})
app.get('/scratch', function(req, res) {
	res.send('<html lang="en-us"><head>	<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"	 crossorigin="anonymous">	</script><script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>	<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN"	 crossorigin="anonymous">	</script>	<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.min.js" integrity="sha384-w1Q4orYjBQndcko6MimVbzY0tgp4pWB4lZ7lr30WKz0vr/aWKhXdBNmNb5D92v7s"	 crossorigin="anonymous">	</script>	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2"	 crossorigin="anonymous">	<meta charset="utf-8">	<meta name="viewport" content="width=device-width">	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">	<link rel="manifest" href="/manifest.webmanifest">	<meta name="theme-color" content="#ff0000"> <title>Wgyt | Scratch</title>	<meta name="description" content="The official website of Wgyt.">	<link rel="shortcut icon" href="//cdn.wgyt.tk/images/logo.png">	<link rel="apple-touch-icon" href="//cdn.wgyt.tk/images/logo.png">	<style>		/* cyrillic-ext */		@font-face {			font-family: "Montserrat";			font-style: normal;			font-weight: 200;			font-display: swap;			src: local("Montserrat ExtraLight"), local("Montserrat-ExtraLight"), url(https://fonts.gstatic.com/s/montserrat/v15/JTURjIg1_i6t8kCHKm45_aZA3gTD_u50.woff2) format("woff2");			unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;		}		/* cyrillic */		@font-face {			font-family: "Montserrat";			font-style: normal;			font-weight: 200;			font-display: swap;			src: local("Montserrat ExtraLight"), local("Montserrat-ExtraLight"), url(https://fonts.gstatic.com/s/montserrat/v15/JTURjIg1_i6t8kCHKm45_aZA3g3D_u50.woff2) format("woff2");			unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;		}		/* vietnamese */		@font-face {			font-family: "Montserrat";			font-style: normal;			font-weight: 200;			font-display: swap;			src: local("Montserrat ExtraLight"), local("Montserrat-ExtraLight"), url(https://fonts.gstatic.com/s/montserrat/v15/JTURjIg1_i6t8kCHKm45_aZA3gbD_u50.woff2) format("woff2");			unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;		}		/* latin-ext */		@font-face {			font-family: "Montserrat";			font-style: normal;			font-weight: 200;			font-display: swap;			src: local("Montserrat ExtraLight"), local("Montserrat-ExtraLight"), url(https://fonts.gstatic.com/s/montserrat/v15/JTURjIg1_i6t8kCHKm45_aZA3gfD_u50.woff2) format("woff2");			unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;		}		/* latin */		@font-face {			font-family: "Montserrat";			font-style: normal;			font-weight: 200;			font-display: swap;			src: local("Montserrat ExtraLight"), local("Montserrat-ExtraLight"), url(https://fonts.gstatic.com/s/montserrat/v15/JTURjIg1_i6t8kCHKm45_aZA3gnD_g.woff2) format("woff2");			unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;		}		body {			font-family: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;			background-color: black;		}		h1 {			color: red;			font-size: 60px;		}		h2 {			color: white;			font-size: 45px;		}		h3 {			color: white;			font-size: 35px;		}		button {			background-color: white;			color: black;			p		text-align: center;			text-decoration: none;			display: inline-block;			font-size: 14px;			cursor: pointer;		}		button:hover {			background-color:rgb(77,77,77)y;			color: red;		}		p {			color: white;			font-size: 25px;		}		.center {			text-align: center;			display: flex;			justify-content: center;			align-items: center;		}		hr {			border: 3px dashed red;			border-radius: 5px;		}		disabled {			cursor: not-allowed;			background-color: gray;		}	</style>	<script type="text/javascript">		window.addEventListener("load", () => {  if ("serviceWorker" in navigator) {    navigator.serviceWorker.register("service-worker.js");  }});	</script></head><body cz-shortcut-listen="true">	<nav class="navbar navbar-light bg-light"> <a class="navbar-brand" href="/"> <img src="https://cdn.wgyt.tk/images/logo.png" width="30" height="30" class="d-inline-block align-top" alt="" loading="lazy">    Wgyt  </a>	<ul class="nav nav-pills justify-content-center">		<li class="nav-item"> <a class="nav-link" href="home">Home</a> </li>		<li class="nav-item"> <a class="nav-link" href="about">About</a> </li>		<li class="nav-item"> <a class="nav-link" href="blog">Blog</a> </li>		<li class="nav-item"> <a class="nav-link active" href="scratch" tabindex="-1">Scratch</a> </li>		<li class="nav-item"> <a class="nav-link" href="sitemap" tabindex="-1">Sitemap</a> </li>	</ul>	</nav>	<div class="container">		<hr> <h2>Wgyt</h2>		<hr> <h3>My Scratch Projects:</h3>		<p>Galactica Os</p><iframe src="https://turbowarp.org/415729079/embed" width="400" height="400" allowtransparency="true" frameborder="0" scrolling="no" allowfullscreen></iframe></div></body></html>')
})
app.get('/%E0%B6%9E', function(req, res) {
	res.send("AMONG US")
})
app.get('/blog', function(req, res) {
	res.send('<html lang="en-us"><head>    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>  <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script> <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.min.js" integrity="sha384-w1Q4orYjBQndcko6MimVbzY0tgp4pWB4lZ7lr30WKz0vr/aWKhXdBNmNb5D92v7s" crossorigin="anonymous"></script>    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">	<meta charset="utf-8">	<meta name="viewport" content="width=device-width">	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">	<link rel="manifest" href="/manifest.webmanifest">	<meta name="theme-color" content="#ff0000"> <title>Wgyt | Blog</title>	<meta name="description" content="The official website of Wgyt.">	<link rel="shortcut icon" href="//cdn.wgyt.tk/images/logo.png">	<link rel="apple-touch-icon" href="//cdn.wgyt.tk/images/logo.png">	<style>		/* cyrillic-ext */		@font-face {			font-family: "Montserrat";			font-style: normal;			font-weight: 200;			font-display: swap;			src: local("Montserrat ExtraLight"), local("Montserrat-ExtraLight"), url(https://fonts.gstatic.com/s/montserrat/v15/JTURjIg1_i6t8kCHKm45_aZA3gTD_u50.woff2) format("woff2");			unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;		}		/* cyrillic */		@font-face {			font-family: "Montserrat";			font-style: normal;			font-weight: 200;			font-display: swap;			src: local("Montserrat ExtraLight"), local("Montserrat-ExtraLight"), url(https://fonts.gstatic.com/s/montserrat/v15/JTURjIg1_i6t8kCHKm45_aZA3g3D_u50.woff2) format("woff2");			unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;		}		/* vietnamese */		@font-face {			font-family: "Montserrat";			font-style: normal;			font-weight: 200;			font-display: swap;			src: local("Montserrat ExtraLight"), local("Montserrat-ExtraLight"), url(https://fonts.gstatic.com/s/montserrat/v15/JTURjIg1_i6t8kCHKm45_aZA3gbD_u50.woff2) format("woff2");			unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;		}		/* latin-ext */		@font-face {			font-family: "Montserrat";			font-style: normal;			font-weight: 200;			font-display: swap;			src: local("Montserrat ExtraLight"), local("Montserrat-ExtraLight"), url(https://fonts.gstatic.com/s/montserrat/v15/JTURjIg1_i6t8kCHKm45_aZA3gfD_u50.woff2) format("woff2");			unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;		}		/* latin */		@font-face {			font-family: "Montserrat";			font-style: normal;			font-weight: 200;			font-display: swap;			src: local("Montserrat ExtraLight"), local("Montserrat-ExtraLight"), url(https://fonts.gstatic.com/s/montserrat/v15/JTURjIg1_i6t8kCHKm45_aZA3gnD_g.woff2) format("woff2");			unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;		}		body {			font-family: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;			background-color: black;		}		h1 {			color: red;			font-size: 60px;		}		h2 {			color: white;			font-size: 45px;		}		h3 {			color: white;			font-size: 35px;		}		button {			background-color: white;			color: black;			p		text-align: center;			text-decoration: none;			display: inline-block;			font-size: 14px;			cursor: pointer;		}		button:hover {			background-color:rgb(77,77,77)y;			color: red;		}		p {			color: white;			font-size: 25px;		}		.center {			text-align: center;			display: flex;			justify-content: center;			align-items: center;		}		hr {			border: 3px dashed red;			border-radius: 5px;		}		disabled {			cursor: not-allowed;			background-color: gray;		}	</style>	<script type="text/javascript">		window.addEventListener("load", () => {  if ("serviceWorker" in navigator) {    navigator.serviceWorker.register("service-worker.js");  }});	</script></head><body cz-shortcut-listen="true">	<nav class="navbar navbar-light bg-light">  <a class="navbar-brand" href="/">    <img src="https://cdn.wgyt.tk/images/logo.png" width="30" height="30" class="d-inline-block align-top" alt="" loading="lazy">    Wgyt  </a>	<ul class="nav nav-pills justify-content-center">		<li class="nav-item"> <a class="nav-link" href="home">Home</a> </li>		<li class="nav-item"> <a class="nav-link" href="about">About</a> </li>		<li class="nav-item"> <a class="nav-link active" href="blog">Blog</a> </li>		<li class="nav-item"> <a class="nav-link" href="scratch" tabindex="-1">Scratch</a> </li>		<li class="nav-item"> <a class="nav-link" href="sitemap" tabindex="-1">Sitemap</a> </li>	</ul>	</nav><div class="alert alert-warning" role="alert">This page is under maintnence, and may change at any time</div><div class="container">		<hr> <h2>Wgyt</h2>		<hr> <h3>About Me</h3>		<p>My name is Wgyt, but you can call me William. I code using Scratch, Html, Css and Python 3. I also work with the awesone team at Scratch Addons.</p>	</div></body></html>')
})
app.get('/sitemap', function(req, res) {
	res.send("<meta http-equiv='refresh' content='0; url=/sitemap.xml'>")
})
app.get('/sitemap.xml', function(req, res) {
	res.send('<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">   <!--  created with Free Online Sitemap Generator www.xml-sitemaps.com  -->   <url>      <loc>http://www.wgyt.tk/</loc>      <lastmod>2020-11-25T13:29:50+00:00</lastmod>      <priority>1.00</priority>   </url>   <url>      <loc>http://www.wgyt.tk/home</loc>      <lastmod>2020-11-25T13:29:50+00:00</lastmod>      <priority>0.80</priority>   </url>   <url>      <loc>http://www.wgyt.tk/about</loc>      <lastmod>2020-11-25T13:29:50+00:00</lastmod>      <priority>0.80</priority>   </url>   <url>      <loc>http://www.wgyt.tk/blog</loc>      <lastmod>2020-11-25T13:29:50+00:00</lastmod>      <priority>0.80</priority>   </url>   <url>      <loc>http://www.wgyt.tk/scratch</loc>      <lastmod>2020-11-25T13:29:50+00:00</lastmod>      <priority>0.80</priority>   </url>   <url>      <loc>http://www.wgyt.tk/sitemap</loc>      <lastmod>2020-11-25T13:29:50+00:00</lastmod>      <priority>0.80</priority>   </url></urlset>')
})
app.get("/styles.css", function(req, res) {
	res.send("@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap');.css-selector {font-family: 'Montserrat', Arial;}h1 {color: red;font-family: Montserrat;font-size: 60px;}h2 {color: rgb(97,97,97);font-family: Montserrat;font-size: 45px;}h3 {color: rgb(97,97,97);font-family: Montserrat;font-size: 35px;}button {background-color: red;border: none;color: white;pext-align: center;text-decoration: none;display: inline-block;font-size: 14px;cursor: pointer;transition-duration: 0.4s;}button:hover {background-color: black;color: red;}p {color: rgb(97,97,97);font-family: Montserrat;font-size: 25px;}.center {text-align: center;display: flex;justify-content: center;align-items: center;}hr {border: 3px dashed red;border-radius: 5px;}")
})
app.get("/manifest.webmanifest", function(req, res) {
	res.send('{  "short_name": "Wgyt",  "name": "Wgyt",  "description": "Wgyts app",  "icons": [    {      "src": "//cdn.wgyt.tk/images/logo.png",      "type": "image/png",      "sizes": "192x192",			"purpose":"maskable"    },		{      "src": "//cdn.wgyt.tk/images/logo.png",      "type": "image/png",      "sizes": "512x512 ",			"purpose":"any"    },		{      "src": "//cdn.wgyt.tk/images/logo.png",      "type": "image/png",      "sizes": "192x192",			"purpose":"any"    }  ],  "start_url": "/",  "background_color": "#ff0000",  "display": "standalone",  "scope": "/",  "theme_color": "#ff0000",	"lang": "en-us",	"orientation":"any",  "shortcuts": [    {      "name": "Home",      "short_name": "Home",      "description": "Main Page",      "url": "/",      "icons": [{ "src": "//cdn.wgyt.tk/images/logo.png", "sizes": "192x192" }]    }  ]}')
})
app.get("/offline.html", function(req, res) {
	res.send('<!DOCTYPE html><html lang="en-us"><head>	<meta charset="utf-8">	<meta name="viewport" content="width=device-width">	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />	<meta name="theme-color" content="#ff0000">	<title>Wgyt | Offline</title>	<style>		body {font-family: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;}h1 {color:red;;font-size: 60px;}h2 {color: rgb(97,97,97);;font-size: 45px;}h3 {color: rgb(97,97,97);;font-size: 35px;}button {background-color: red;border: none;color: white;pext-align: center;text-decoration: none;display: inline-block;font-size: 14px;cursor: pointer;transition-duration: 0.4s;}button:hover {background-color: white;color: red;}p {color: rgb(97,97,97);;font-size: 25px;}.center {text-align: center;display: flex;justify-content: center;align-items: center;}hr {border: 3px dashed red;border-radius: 5px;}disabled{cursor: not-allowed; background-color: gray;}	</style></head><body>	<h1>Wgyt</h1>	<h2>Oh No!</h2>	<h3>You are offline...</h3>	<p>Try to refresh the page.</p></body></html>')
})

app.get("/service-worker.js", function(req, res) {
	res.send('const OFFLINE_VERSION = 1;const CACHE_NAME = "offline";const OFFLINE_URL = "offline.html";self.addEventListener("install", (event) => {event.waitUntil((async () => {const cache = await caches.open(CACHE_NAME);await cache.add(new Request(OFFLINE_URL, { cache: "reload" }));})());self.skipWaiting();});self.addEventListener("activate", (event) => {event.waitUntil((async () => {if ("navigationPreload" in self.registration) {await self.registration.navigationPreload.enable();}})());self.clients.claim();});self.addEventListener("fetch", (event) => {if (event.request.mode === "navigate") {event.respondWith((async () => {try {const preloadResponse = await event.preloadResponse;if (preloadResponse) {return preloadResponse;}const networkResponse = await fetch(event.request);return networkResponse;} catch (error) {console.log("Fetch failed; returning offline page instead.", error);const cache = await caches.open(CACHE_NAME);const cachedResponse = await cache.match(OFFLINE_URL);return cachedResponse;}})());}});')
})



/* HTTP Status Pages */

/* 4xx errors */
app.get('/400', function(req, res) {
	res.status(400).send('400 Bad Request')
})
app.get('/401', function(req, res) {
	res.status(401).send('401 Unauthorized')
})
app.get('/402', function(req, res) {
	res.status(402).send('402 Payment Required')
})
app.get('/403', function(req, res) {
	res.status(403).send('403 Forbidden')
})
app.get('/404', function(req, res) {
	res.status(404).send('404 Not Found')
})
app.get('/405', function(req, res) {
	res.status(405).send('405 Method Not Allowed')
})
app.get('/406', function(req, res) {
	res.status(406).send('406 Not Acceptable')
})
app.get('/407', function(req, res) {
	res.status(407).send('407 Proxy Authentication Required')
})
app.get('/408', function(req, res) {
	res.status(408).send('408 Request Timeout')
})
app.get('/409', function(req, res) {
	res.status(409).send('409 Conflict')
})
app.get('/410', function(req, res) {
	res.status(410).send('410 Gone')
})
app.get('/411', function(req, res) {
	res.status(411).send('411 Length Required')
})
app.get('/412', function(req, res) {
	res.status(412).send('412 Precondition Failed')
})
app.get('/413', function(req, res) {
	res.status(413).send('413 Payload Too Large')
})
app.get('/414', function(req, res) {
	res.status(414).send('414 URI Too Long')
})
app.get('/415', function(req, res) {
	res.status(415).send('415 Unsupported Media Type')
})
app.get('/416', function(req, res) {
	res.status(416).send('416 Range Not Satisfiable')
})
app.get('/417', function(req, res) {
	res.status(417).send('417 Expectation Failed')
})
app.get('/418', function(req, res) {
	res.status(418).send("418 I'm a teapot")
})
app.get('/422', function(req, res) {
	res.status(422).send('422 Unprocessable Entity')
})
app.get('/425', function(req, res) {
	res.status(425).send('425 Too Early')
})
app.get('/426', function(req, res) {
	res.status(426).send('426 Upgrade Required')
})
app.get('/428', function(req, res) {
	res.status(428).send('428 Precondition Required')
})
app.get('/429', function(req, res) {
	res.status(429).send('429 Too Many Requests')
})
app.get('/431', function(req, res) {
	res.status(431).send('431 Request Header Fields Too Large')
})
app.get('/451', function(req, res) {
	res.status(451).send('451 Unavailable For Legal Reasons')
})

/* 5xx errors */
app.get('/500', function(req, res) {
	res.status(500).send('500 Internal Server Error')
})
app.get('/501', function(req, res) {
	res.status(501).send('501 Not Implemented')
})
app.get('/502', function(req, res) {
	res.status(502).send('502 Bad Gateway')
})
app.get('/503', function(req, res) {
	res.status(503).send('503 Service Unavailable')
})
app.get('/504', function(req, res) {
	res.status(504).send('504 Gateway Timeout')
})
app.get('/505', function(req, res) {
	res.status(505).send('505 HTTP Version Not Supported')
})
app.get('/506', function(req, res) {
	res.status(506).send('506 Variant Also Negotiates')
})
app.get('/507', function(req, res) {
	res.status(507).send('507 Insufficient Storage')
})
app.get('/508', function(req, res) {
	res.status(508).send('508 Loop Detected')
})
app.get('/510', function(req, res) {
	res.status(510).send('510 Not Extended')
})
app.get('/511', function(req, res) {
	res.status(511).send('511 Network Authentication Required')
})
app.get('/735', function(req, res) {
	res.status(735).send('735: Wgyt735yt was here')
})
