// 'use strict';

// var app = angular.module('myApp', ['ngAnimate', 'ngMaterial', 'ngRoute', 'chartjs-directive', 'chart.js']);

// app.config([
//     '$routeProvider',
//     '$locationProvider',
//     function($routeProvider, $locationProvider) {
//         $routeProvider.when('/', {
//             templateUrl: 'template/my.tmpl.html',
//             controller: 'MyCtrl'
//         }).otherwise({ redirectTo: '/' });

//         $locationProvider.html5Mode(true);
//     }
// ]);

// app.config(function($mdThemingProvider) {
//   var customBlueMap = 		$mdThemingProvider.extendPalette('light-blue', {
//     'contrastDefaultColor': 'light',
//     'contrastDarkColors': ['50'],
//     '50': 'ffffff'
//   });
//   $mdThemingProvider.definePalette('customBlue', customBlueMap);
//   $mdThemingProvider.theme('default')
//     .primaryPalette('customBlue', {
//       'default': '500',
//       'hue-1': '50'
//     })
//     .accentPalette('pink');
//   $mdThemingProvider.theme('input', 'default')
//         .primaryPalette('grey')
// });





// var app = angular.module('StarterApp', ['ngMaterial', 'ngMdIcons']);



var app = angular.module('StarterApp', ['ngMaterial', 'ngMdIcons', 'chartjs-directive', 'chart.js']);




app.config(function($mdThemingProvider) {
  var customBlueMap = $mdThemingProvider.extendPalette('light-blue', {
    'contrastDefaultColor': 'light',
    'contrastDarkColors': ['50'],
    '50': 'ffffff',

  });
  $mdThemingProvider.definePalette('customBlue', customBlueMap);
  $mdThemingProvider.theme('default')
    .primaryPalette('customBlue', {
      'default': '500',
      'hue-1': '50'
    })
    .accentPalette('customBlue');
  $mdThemingProvider.theme('input', 'default')
        .primaryPalette('grey')
         .backgroundPalette('customBlue')
});





  