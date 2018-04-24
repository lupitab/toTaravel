angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('iniciarSesion', {
    url: '/Login',
    templateUrl: 'templates/iniciarSesion.html',
    controller: 'iniciarSesionCtrl'
  })

  .state('tipoR', {
    url: '/tipoR',
    templateUrl: 'templates/tipoR.html',
    controller: 'tipoRCtrl'
  })

  .state('registro', {
    url: '/Registro',
    templateUrl: 'templates/registro.html',
    controller: 'registroCtrl'
  })

  .state('registroViajero', {
    url: '/RegistroViajero',
    templateUrl: 'templates/registroViajero.html',
    controller: 'registroViajeroCtrl'
  })

  .state('registroGuia', {
    url: '/RegistroGuia',
    templateUrl: 'templates/registroGuia.html',
    controller: 'registroGuiaCtrl'
  })

  .state('home', {
    url: '/page7',
    templateUrl: 'templates/home.html',
    controller: 'homeCtrl'
  })

  .state('tour', {
    url: '/Tour',
    templateUrl: 'templates/tour.html',
    controller: 'tourCtrl'
  })

  .state('detalleReservacion', {
    url: '/DetalleReservacion',
    templateUrl: 'templates/detalleReservacion.html',
    controller: 'detalleReservacionCtrl'
  })

  .state('favoritos', {
    url: '/favoritos',
    templateUrl: 'templates/favoritos.html',
    controller: 'favoritosCtrl'
  })

  .state('tusViajes', {
    url: '/TusViajes',
    templateUrl: 'templates/tusViajes.html',
    controller: 'tusViajesCtrl'
  })

  .state('reservar', {
    url: '/Reservar',
    templateUrl: 'templates/reservar.html',
    controller: 'reservarCtrl'
  })

  .state('guia', {
    url: '/guia',
    templateUrl: 'templates/guia.html',
    controller: 'guiaCtrl'
  })

$urlRouterProvider.otherwise('/Login')


});