angular.module("myChats").service("mainSrvc", function($http){

  this.getChats = function(){
    //TODO Call server to get the chats
    return $http.get('/api/chats')
      .then(function(response){
        // console.log(response)
        return response.data;
      });
  }

  this.addChats = function(chat){
    //TODO Call server to add to chats
    $http.post('/api/chats',{message:chat})
    .then(function(response) {
      console.log(response)
    })
  }

  this.deleteChats = function(){
    //TODO Call server to whipe all the chats
    $http.delete('/api/chats')
      .then(function(response) {
        console.log(response)
      })
  }

  this.setScreenname = function(screenname) {
    $http.post('/api/screenname',{screenname:screenname}) // in ES6 = to {screenname}
      .then(function(response) {
        console.log(response)
      });
  }
});
