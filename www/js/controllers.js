angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Events) {

  $scope.events = Events.all();
  $scope.remove = function(event) {
      Events.remove(event);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Events) {
    console.log($stateParams.eventId);
  $scope.event = Events.get($stateParams.eventId);
})

.controller('AccountCtrl', function($scope, MapProvider) {
    MapProvider.setMap();
});
