var express = require('express');

var app = express();

var handlebars = require('express-handlebars').create(
    { defaultLayout: 'main' }
); // common, I bet: symbol key, string value

app.engine('handlebars', handlebars.engine); // wtf?
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3000);

app.get('/', function(req, res){
    res.type('text/plain');
    res.send('Annealing is an app');
});
app.get('/', function(req, res){
    res.type('text/plain');
    res.send('Annealing is an app');
});
app.get('/about', function(req, res){
    res.type('text/plain');
    res.send('The theory of annealing');
    // The content of this page, if you decide to have it, should be an edited version of the /readme.org/ page you wrote like a monkey at a typewriter.
});

// 404 : Page not found
app.use(function (req, res) {
    res.type('text/plain');
    res.status(404);
    res.send('404 - Not Found')
})

// 500 : Server error
app.use(function(err, req, res, next){
    console.error(err.stack); // what? I guess we expect the err object to have this attr
    res.type('text/plain');
    res.status(500);
    res.send('500 - Server Error');
});

// Go ahead, I'm listening
app.listen(app.get('port'), function(){
    console.log('Express started on http://localhost:'+
                app.get('port')+
                '; press Ctrl-C to terminate.');
});
