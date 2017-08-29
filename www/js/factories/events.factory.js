angular.module('starter.services')

/**
 * @ngdoc Factory
 * @name Events
 * @description
 *
 * # Events
 *
 * The Chats factory provides all events that a user wants to assist. These events contain information about who will speak
 * in that event and the event itself. This factory provides CRD (Create|Read|Delete) methods so the user can manage his/her
 * events.
 */

.factory('Events', function() {

    /**
     * In a real project with a real backend, you must use $http service and you must handle its promises. But, as this
     * is just a proof of concept of how you can include MapBox in Ionic v1 projects, I have hardcoded the events data.
     */

    var events = [{
        id: 0,
        name: 'Ben Sparrow',
        eventName: 'Ionic vs React Native',
        face: 'img/ben.png',
        details: 'The battle of hybrid frameworks is still active! Ionic is now on its third version and React Native is being' +
        'more popular. With that said, the debate is open: which framework is better to develop cross-platform apps using web ' +
        'technologies? Ben Sparrow will discuss this topic, advantages and disadvantages of both frameworks and will compare ' +
        'performance of some sample apps.',
        time: 'Friday 14:00'
    }, {
        id: 1,
        name: 'Max Lynx',
        eventName: 'Cordova plugins in Ionic v1',
        face: 'img/max.png',
        details: 'With Ionic and Cordova you can develop hybrid apps so the user can feel he/she is really using a native' +
        'app. Cordova includes several plugins to access to native functionalities such as access to the camera, contacts,' +
        'and also geolocation. This is possible as web technologies are evolving and now we can develop web real time communications' +
        'with WebRTC and we can also use Web Bluetooth. Nowadays it is not mandatory to develop with Kotlin or Swift to develop mobile ' +
        'apps.',
        time: 'Friday 14:30'

    }, {
        id: 2,
        name: 'Adam Bradleyson',
        eventName: 'What is MapBox?',
        face: 'img/adam.jpg',
        details: 'We use our mobile phones everyday and for almost everything. We use mobile phones when we travel, so maps' +
        'functionalities are trending as they are very useful. We can implement several map features with MapBox, an open source' +
        'mapping platform which gives us access to cool features like geolocation, navigation and even 3D building generation in our ' +
        'maps.',
        time: 'Friday 15:00'
    }, {
        id: 3,
        name: 'Perry Governor',
        eventName: 'Hybrid vs Native development',
        face: 'img/perry.png',
        details: 'Why should we develop mobile apps with Kotlin or Swift? If you like web technologies, you can develop mobile apps!' +
        'But many of us can believe that performance would be better with native apps. As you can see in this event, this would depend in ' +
        'functional requirements and many more things. We will cover native and hybrid development and compare sample apps developed with ' +
        'Ionic and Java.',
        time: 'Saturday 14:00'
    }, {
        id: 4,
        name: 'Mike Harrington',
        eventName: 'Service workers with Ionic',
        face: 'img/mike.png',
        details: 'If you are developing with Ionic, you are developing with web technologies just like service workers. Service workers ' +
        'can provide new features that you could not imagine, for example pre-caching images, styles and even responses from the server. This ' +
        'could improve your hybrid app performance in real devices, so you must check this event',
        time: 'Saturday 15:00'
    }];

    return {
        /**
         * Returns all events data (speaker name, event name, speaker image, event details and event date)
         * @returns {[null,null,null,null,null]}
         */
        all: function() {
            return events;
        },
        /**
         * Removes a event the user doesn't want to assist
         * @param event
         */
        remove: function(event) {
            events.splice(events.indexOf(event), 1);
        },
        /**
         * Returns event data (speaker name, event name, speaker image, event details and event date). If there is not such event
         * it returns null.
         *
         * @param eventId Integer
         * @returns Object|null
         */
        get: function(eventId) {
            for (var i = 0; i < events.length; i++) {
                if (events[i].id === parseInt(eventId)) {
                    return events[i];
                }
            }
            return null;
        }
    };
});