var path = require('path');
var express = require('express');
var app = express();
var router = express.Router();
var phpExpress = require('php-express')({
    binPath: 'php'
});
var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.set('port', (process.env.PORT || 5000));

/*app.use('/', express.static(__dirname));

app.set('views', path.join(__dirname, '/views'));
app.engine('php', phpExpress.engine);
app.set('view engine', 'php');

app.all(/.+\.php$/, phpExpress.router);

app.use(function (req, res, next) {
    res.status(404).send("Sorry can't find that!")
});

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});

*/


let execPhp = require('exec-php')

execPhp('/mailer.php', (err, php, out) => {
console.log(php);
    php.MyFunction("test@gmail.com", 'asdasd','nashee', function(error, result){
        // result is now 3
    })
})