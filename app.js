var express = require ('express');
var app = express();
var bodyParser = require('body-parser');
var port = 8000;

app.use(bodyParser.urlencoded({extended:true}));
// app.use(express.urlencoded({extended:true}));
app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/public')); 
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.get('/', function(req, res) {
    res.render('index.html');
});
app.get('/about-us', function(req, res) {
    res.render('about.html');
});
app.get('/landing', function(req, res) {
    res.render('landing.html');
});
app.get('/services', function(req, res) {
    res.render('services.html');
});

app.listen(port, function() {
    console.log('A for C is listening to you, don\'t be a bad human');
})