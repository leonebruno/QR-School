angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'AppCtrl'
    })
    .state('app.home', {
        url: '/home',
        views: {
            'menuContent': {
                templateUrl: 'templates/home.html',
                controller: 'HomeCtrl'
            }
        }
    })
    .state('app.scan', {
        url: '/scan',
        views: {
            'menuContent': {
                templateUrl: 'templates/scan.html',
                controller: 'ScanCtrl'
            }
        }
    })
    .state('app.search', {
        url: '/search',
        views: {
            'menuContent': {
                templateUrl: 'templates/search.html'
            }
        }
    })
    .state('app.login', {
        url: '/login',
        views: {
            'menuContent': {
                templateUrl: 'templates/login.html',
                controller: 'LoginCtrl'
            }
        }
    })
    .state('app.dashStudent', {
        url: '/dashStudent',
        views: {
            'menuContent': {
                templateUrl: 'templates/dash-student.html',
                controller: 'dashStudentCtrl'
            }
        }
    })
    .state('app.map', {
        url: '/map',
        views: {
            'menuContent': {
                templateUrl: 'templates/map.html',
                controller: 'MapCtrl'
            }
        }
    })
    .state('app.device', {
        url: '/device',
        views: {
            'menuContent': {
                templateUrl: 'templates/device.html',
                controller: 'deviceCtrl'
            }
        }
    })
    ;
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/home');
    });