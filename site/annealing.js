var express = require('express');

var app = express();

// app.port = process.env.PORT || 3000;

app.set('port', process.env.PORT || 3000);

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

app.listen(app.get('port'), function(){
    console.log('Express started on http://localhost:'+
                app.get('port')+
                '; press Ctrl-C to terminate.');
});

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
