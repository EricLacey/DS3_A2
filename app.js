const express   = require('express');       //get express library
const app       = express();                //initialize express
const http      = require('http');          //get http library 
const server    = http.createServer(app);   //initialize the http server using app

const PORT      = 1111;                     // 8080 is a common port, just make sure its a high port that won't conflict

server.listen(PORT);                                    //start the server
app.use(express.static(__dirname + '/public') );         //declare where the default directory is

console.log("server initialized, listening to port: " + PORT);      //print to terminal

//set our route(s)
app.get('/', function(req, res){
    res.sendfile(__dirname + '/public/index.html')
});