var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.json({
        "IP" : req.ip.split(':')[2],
        "Language" : req.get('accept-language').split(',')[0],
        "Operating System" : req.get('user-agent').split(/\(|\)/g)[1],
    });
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(process.env.PORT || 3000, function(){
    console.log("Server started...");
});