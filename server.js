var path = require('path');
var webpack = require('webpack');
var express = require('express');
var fs = require('fs');
var config = require('./webpack.config');

var app = express();
var compiler = webpack(config);

var dataToSend = JSON.parse(fs.readFileSync('data.json'));

app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3000, function(err) {
  if (err) {
    return console.error(err);
  }

  console.log('Listening at http://localhost:3000/');
});

app.get('/api', function(request, response) {
  response.send(dataToSend);
});

app.get('/api/users', function(request, response) {
  const commentsToReturn = dataToSend.comments.filter(comment => comment.userId === request.params.id);
  response.send(dataToSend.users);
});

app.get('/api/users/comments/:userId', function(request, response) {
  const commentsToReturn = dataToSend.comments.filter(comment => comment.userId === request.params.userId);
  response.send(commentsToReturn);
});

app.get('/api/users/comments/replies/:commentId', function(request, response) {
  const repliesToReturn = dataToSend.repliesList.filter(reply => reply.commentId === request.params.commentId);
  response.send(repliesToReturn);
});
