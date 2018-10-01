console.log('client.js loaded');

const app = angular.module('MessageBoardApp', [])

app.controller('MessagesController', ['$http', function($http) {
  let vm = this;
  vm.messageToAdd={
    name: 'Luke',
    message: 'Do your feedback'
  };

  vm.getMessages = function () {
    $http.get('/messages')
      .then(function(response) {
        console.log('Messages have arrived!', response.data);
      })
      .catch(function(error) {
        console.log('Error getting messages', error);
      })
  }//end getMessages

  vm.postMessage = function () {
    $http.post('/messages', vm.messageToAdd)
      .then(function(response) {
        console.log('Message added', response.data);
      })
      .catch(function(error) {
        console.log('Error posting message', error);
      })
  }
  vm.postMessage();
//get Message list on page load
vm.getMessages();



}])//end controller