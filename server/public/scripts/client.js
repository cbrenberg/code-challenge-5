console.log('client.js loaded');

const app = angular.module('MessageBoardApp', [])

app.controller('MessagesController', ['$http', function($http) {
  let vm = this;
  vm.message="angular loaded";

  vm.getMessages = function () {
    $http.get('/messages')
      .then(function(response) {
        console.log('Messages have arrived!', response.data);
      })
      .catch(function(error) {
        console.log('Error getting messages', error);
      })
  }//end getMessages

//get Message list on page load
vm.getMessages();

}])//end controller