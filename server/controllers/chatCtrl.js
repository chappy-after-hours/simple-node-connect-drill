var chats = [];
module.exports = {

  getChats:function(req,res){
    // TODO write getChats
    res.status(200).send(chats)
  },
  postChats:function(req,res){
    // TODO write postChats

    var newMessage = {
      screenname: req.session.screenname,
      message: req.body.message
    };

    chats.push(newMessage)
    res.status(202).send(newMessage)
  },
  deleteChats:function(req,res){
    // TODO write deleteChats
    chats = [];
    res.status(204).send('Done');

  }
}
