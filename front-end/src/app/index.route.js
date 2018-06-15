export function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
  .state('auth', {
    url: '/auth',
    templateUrl: 'app/auth/auth.html',
    controller: 'AuthController',
    controllerAs: 'auth'
  })  
  .state('home', {
      url: '/',
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'main'
    })
    .state('rfi', {
      url: '/rfi',
      templateUrl: 'app/rfi/rfi.html',
      controller: 'RfiController',
      controllerAs: 'rfi'
    });

  $urlRouterProvider.otherwise('/');
}
