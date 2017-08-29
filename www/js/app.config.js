angular.module('starter')


    .config(function($stateProvider, $urlRouterProvider, MapProviderProvider) {

        MapProviderProvider.setAccessToken('pk.eyJ1IjoibmluamE0YSIsImEiOiJjajZxamZoM3cwYjFyMnFvYWw4Z2k5MTRoIn0.No45VLUi2lHAvLn3DdFvOQ');

        $stateProvider
            .state('tab', {
                url: '/tab',
                abstract: true,
                templateUrl: 'templates/tabs.html'
            })
            .state('tab.dash', {
                url: '/dash',
                views: {
                    'tab-dash': {
                        templateUrl: 'templates/tab-dash.html',
                        controller: 'DashCtrl'
                    }
                }
            })
            .state('tab.chats', {
                url: '/chats',
                views: {
                    'tab-chats': {
                        templateUrl: 'templates/tab-events.html',
                        controller: 'ChatsCtrl'
                    }
                }
            })
            .state('tab.chat-detail', {
                url: '/chats/:eventId',
                views: {
                    'tab-chats': {
                        templateUrl: 'templates/event-detail.html',
                        controller: 'ChatDetailCtrl'
                    }
                }
            })
            .state('tab.account', {
                url: '/account',
                views: {
                    'tab-account': {
                        templateUrl: 'templates/tab-map.html',
                        controller: 'AccountCtrl'
                    }
                }
            });

        $urlRouterProvider.otherwise('/tab/dash');

    });