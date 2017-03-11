var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');
var chatCtrl = require('./controllers/chatCtrl');
var port = process.argv[2] || 3737; // process.argv cool thing. look up

// TODO server front end files with static
app.use(express.static('public'));

app.use(bodyParser.json());

// TODO Initialize Session
app.use(session({
  secret: 'ohappydaaaaaaay',
  resave: true,
  saveUninitialized: true
}))


app.post("/api/screenname", function(req, res){
  // TODO Save screenname to session
  req.session.screenname = req.body.screenname;
  res.status(201).send('success');
})

app.get("/api/chats", chatCtrl.getChats);
app.post("/api/chats", chatCtrl.postChats);
app.delete("/api/chats", chatCtrl.deleteChats);



app.listen(port, function(){
  console.log("Listeing on port ", port, " INSERT-WITTY-STATEMENT-HERE");
});
