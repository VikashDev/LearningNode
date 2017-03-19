let express = require('express');
let app = express();

// for get request
app.get('/', function (req, res) {
    res.send('Hello we have get the resquent');
});
// for post request
app.post('/contact', function (req, res) {

});

// for delete request
app.delete('/delete', function (req, res) {

});

// getting the
app.get('/profile/:id', function(req, res){
    res.send('the profile id is ' + req.params.id);
});

// getting the
app.get('/portfolio/:name', function(req, res){
    res.send('the profile id is ' + req.params.name);
});

app.listen(3000);
