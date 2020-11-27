/* Setup Express Js */
var express = require('express')
const SitemapGenerator = require('sitemap-generator');
var app = express()
/* Express Config */
var listener = app.listen(process.env.PORT, () => {
    console.log(`Your app is listening on port ${listener.address().port}`);
});
app.use(express.static("public"));
app.get("/", (request, response) => {
    response.sendFile(`${__dirname}/views/index.html`);
});
app.get("/home", (request, response) => {
    response.sendFile(`${__dirname}/views/home.html`);
});
app.get("/about", (request, response) => {
    response.sendFile(`${__dirname}/views/about.html`);
});
app.get("/scratch", (request, response) => {
    response.sendFile(`${__dirname}/views/scratch.html`);
});
app.get("/blog", (request, response) => {
    response.sendFile(`${__dirname}/blog/index.html`);
});

// Duplicate this for each blog post but change the number:
app.get("/blog/1", (request, response) => {
    response.sendFile(`${__dirname}/blog/1.html`);
});

// next post here

app.get("/portfolio", (request, response) => {
    response.sendFile(`${__dirname}/views/portfolio.html`);
});
app.get("/offline.html", (request, response) => {
    response.sendFile(`${__dirname}/views/offline.html`);
});
app.get("/service-worker.js", (request, response) => {
    response.sendFile(`${__dirname}/public/service-worker.js`);
});
app.get("/manifest.webmanifest", (request, response) => {
    response.sendFile(`${__dirname}/public/manifest.webmanifest`);
});
app.get("/sitemap", (request, response) => {
    response.redirect(301, '/sitemap.xml')
});
app.get("/main.css", (request, response) => {
    response.sendFile(`${__dirname}/public/main.css`);
});
app.get("/images/logo.png", (request, response) => {
    response.sendFile(`${__dirname}/public/logo.png`);
});
// create generator
const generator = SitemapGenerator('https://www.wgyt.tk', {
    stripQuerystring: false,
    filepath: './public/sitemap.xml'
});
// register event listeners
generator.on('done', () => {
    // sitemaps created
});
// start the crawler
generator.start();
/* Webpages */
app.get('/%E0%B6%9E', function(req, res) {
    res.send("AMONG US")
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