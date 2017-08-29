angular.module('starter.services')

/**
 * @ngdoc Provider
 * @name MapProvider
 * @description
 *
 * Provider to generate map using MapBox. This map includes navigation, user geolocation and it also displays several
 * markers. As this project is a proof of concept without a real backend, the markers are hardcoded, but in a real world
 * project, the provider will retrieve these markers with AngularJS $http service and using promises.
 *
 * This provider has a config method to config the MapBox access token and it also includes a method to generate the map itself
 * in the view from the controller.
 */


.provider('MapProvider', function () {
    var accessToken;

    /**
     * Sets MapBox access token when configuring AngularJS app module.
     *
     * @param token String
     */
    this.setAccessToken = function(token) { accessToken = token; };

    this.$get = function () {
        return {
            /**
             * Sets map with markers, user geolocation and navigation in view.
             */
            setMap: function () {
                mapboxgl.accessToken = accessToken;
                var map = new mapboxgl.Map({
                    container: 'map',
                    style: 'mapbox://styles/mapbox/streets-v9',
                    center: [-6.136797666680536, 36.688992282316576],
                    zoom: 13
                });

                map.addControl(new mapboxgl.GeolocateControl({
                    positionOptions: {
                        enableHighAccuracy: true
                    },
                    trackUserLocation: true
                }));

                var directions = new MapboxDirections({
                    unit: 'metric',
                    accessToken: mapboxgl.accessToken
                });
                map.addControl(directions, 'top-left');

                map.on('load', function () {
                    directions.setDestination(
                        [-6.138042211532593, 36.68166187813307]
                    );
                    map.addLayer({
                        'id': 'points',
                        'type': 'symbol',
                        'source': {
                            'type': 'geojson',
                            'data': {
                                'type': 'FeatureCollection',
                                'features': [{
                                    'type': 'Feature',
                                    'geometry': {
                                        'type': 'Point',
                                        'coordinates': [-6.138042211532593, 36.68166187813307]
                                    },
                                    'properties': {
                                        'title': 'Conference',
                                        'icon': 'marker'
                                    }
                                }, {
                                    'type': 'Feature',
                                    'geometry': {
                                        'type': 'Point',
                                        'coordinates': [-6.126417708499389, 36.680028031154734]
                                    },
                                    'properties': {
                                        'title': 'Train station',
                                        'icon': 'marker'
                                    }
                                }, {
                                    'type': 'Feature',
                                    'geometry': {
                                        'type': 'Point',
                                        'coordinates': [-6.1488693624444295, 36.69902578851452]
                                    },
                                    'properties': {
                                        'title': 'Hospital',
                                        'icon': 'marker'
                                    }
                                }]
                            }
                        },
                        'layout': {
                            'icon-image': '{icon}-15',
                            'text-field': '{title}',
                            'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
                            'text-offset': [0, 0.6],
                            'text-anchor': 'top'
                        }
                    });
                });
            }
        };
    };
});