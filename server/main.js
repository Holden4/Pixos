'use strict'

const express = require('express')
const debug = require('debug')('app:server')
const path = require('path')
const webpack = require('webpack')
const webpackConfig = require('../config/webpack.config')
const project = require('../config/project.config')
const compress = require('compression')

const http = require('http')



//Import mongoDB
const mongo = require('mongodb')
const monk = require('monk')
const mongoUrl = process.env.MONGO_URL;
var db = monk(mongoUrl);

const app = express()

const server = http.createServer(app);

global.connections = require("./Connections")();

global.matchmaking = require("./Matchmaker")();

global.Room = require("./Room");

global.User = require("./User");

// Apply gzip compression
app.use(compress())


// Loading socket.io
var io = require('socket.io').listen(server);
//
// // When a client connects, we note it in the console
// io.sockets.on('connection', function (socket) {
//     socket.emit('message', 'Your are connected');
//     console.log('A client is connected!');
//     socket.broadcast.emit('message', 'Another client has just connected!');
//
//
//     // When the server receives a “message” type signal from the client
//     socket.on('message', function (message) {
//          console.log(socket.username + ' is speaking to me! They\'re saying: ' + message);
//  });
//
//     socket.on('player', function(username) {
//         socket.username = username;
//     });
//
// });

io.on("connection", function(socket) { //global connection
  var user;
  connections.add(user = User(socket));
  console.log("new user ", user.getName());

  socket.on("disconnect", function() {
    connections.remove(user);
    user.disconnect();
    console.log("user ", user.getName(), " disconnected");
    user = null;
    //io.emit("update:playerOnline", connections.length());
  })
  
  // When the server receives a “message” type signal from the client
  socket.on('message', function (message) {
       console.log(socket.username + ' is speaking to me! They\'re saying: ' + message);
});

  io.emit("update:playerOnline", connections.length());
})




// ------------------------------------
// Apply Webpack HMR Middleware
// ------------------------------------
if (project.env === 'development') {
  const compiler = webpack(webpackConfig)

  debug('Enabling webpack dev and HMR middleware')
  app.use(require('webpack-dev-middleware')(compiler, {
    publicPath  : webpackConfig.output.publicPath,
    contentBase : project.paths.client(),
    hot         : true,
    quiet       : project.compiler_quiet,
    noInfo      : project.compiler_quiet,
    lazy        : false,
    stats       : project.compiler_stats
  }))
  app.use(require('webpack-hot-middleware')(compiler, {
    path: '/__webpack_hmr'
  }))

  // Serve static assets from ~/public since Webpack is unaware of
  // these files. This middleware doesn't need to be enabled outside
  // of development since this directory will be copied into ~/dist
  // when the application is compiled.
  app.use(express.static(project.paths.public()))

  // This rewrites all routes requests to the root /index.html file
  // (ignoring file requests). If you want to implement universal
  // rendering, you'll want to remove this middleware.
  app.use('*', function (req, res, next) {
    const filename = path.join(compiler.outputPath, 'index.html')
    compiler.outputFileSystem.readFile(filename, (err, result) => {
      if (err) {
        return next(err)
      }
      res.set('content-type', 'text/html')
      res.send(result)
      res.end()
    })
  })
} else {
  debug(
    'Server is being run outside of live development mode, meaning it will ' +
    'only serve the compiled application bundle in ~/dist. Generally you ' +
    'do not need an application server for this and can instead use a web ' +
    'server such as nginx to serve your static files. See the "deployment" ' +
    'section in the README for more information on deployment strategies.'
  )

  // Serving ~/dist by default. Ideally these files should be served by
  // the web server and not the app server, but this helps to demo the
  // server in production.
  app.use(express.static(project.paths.dist()))
}

module.exports = { app, server }
