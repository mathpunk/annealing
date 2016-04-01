// Bring in modules
var express = require('express');
var app = express();
var handlebars = require('express-handlebars').create(
    { defaultLayout: 'main' }
); // common, I bet: symbol key, string value

// Set app parameters
app.engine('handlebars', handlebars.engine); // wtf?
app.set('view engine', 'handlebars');
app.set('port', process.env.PORT || 3000);

// Define routes
app.get('/', function(req, res){
    res.render('home');
});
app.get('/about', function(req, res){
    res.render('about');
    // The content of this page, if you decide to have it, should be an edited version of the /readme.org/ page you wrote like a monkey at a typewriter.
});

// 404 handler
app.use(function (req, res, next){
    res.status(404);
    res.render('404');   // as a number, then as a string. that's slightly silly
});

// 500 handler
app.use(function (req, res, next) {
    console.error(err.stack);
    res.status(500);
    res.render('500');   // as a number, then as a string. that's a little silly
});

// Go ahead, I'm listening
app.listen(app.get('port'), function(){
    console.log('Express started on http://localhost:'+ app.get('port')+ '; press Ctrl-C to terminate.');
});
