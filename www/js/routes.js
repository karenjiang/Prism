angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('library', {
    url: '/library',
    templateUrl: 'templates/library.html',
    controller: 'libraryCtrl'
  })

  .state('tableOfContents', {
    url: '/contents',
    templateUrl: 'templates/tableOfContents.html',
    controller: 'tableOfContentsCtrl'
  })

  .state('theOdyssey', {
    url: '/odyssey',
    templateUrl: 'templates/theOdyssey.html',
    controller: 'theOdysseyCtrl'
  })

  .state('category1100', {
    url: '/c1q100',
    templateUrl: 'templates/category1100.html',
    controller: 'category1100Ctrl'
  })

  .state('incorrect', {
    url: '/c1q100_a',
    templateUrl: 'templates/incorrect.html',
    controller: 'incorrectCtrl'
  })

  .state('incorrect2', {
    url: '/c1q100_b',
    templateUrl: 'templates/incorrect2.html',
    controller: 'incorrect2Ctrl'
  })

  .state('incorrect3', {
    url: '/c1q100_c',
    templateUrl: 'templates/incorrect3.html',
    controller: 'incorrect3Ctrl'
  })

  .state('correct', {
    url: '/c1q100_d',
    templateUrl: 'templates/correct.html',
    controller: 'correctCtrl'
  })

  .state('incorrect4', {
    url: '/c1q100_e',
    templateUrl: 'templates/incorrect4.html',
    controller: 'incorrect4Ctrl'
  })

$urlRouterProvider.otherwise('/library')

  

});