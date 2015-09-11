/**
 * Created by weagl on 9/7/2015.
 */
/**
 * this is just for hosting the app with node
 */
var express = require('express');
var path = require('path');

var app = express();

//set the default port
//TODO: set to desired port
app.set('port', process.env.PORT || 4000);

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'dist')));

app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', req.headers.origin);
  res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Credentials', false);
  res.header('Access-Control-Max-Age', '86400');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');

  next();
});

app.options('*', function (req, res) {
  res.status(200).send('ok');
});

app.listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});