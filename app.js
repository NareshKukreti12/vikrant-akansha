'use strict';

var SwaggerExpress = require('swagger-express-mw');
var express=require('express');
const http=require('http');
var app = express();
const path=require('path');
module.exports = app; // for testing
var server=http.createServer(app)

var config = {
  appRoot: __dirname // required config
};

SwaggerExpress.create(config, function(err, swaggerExpress) {
  if (err) { throw err; }
  swaggerExpress.register(app);
  var port = process.env.PORT || 3000;
  const publicPath=path.join(__dirname+'/public')
  console.log(publicPath)
  app.use(express.static(publicPath))
  server.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
  });
});



