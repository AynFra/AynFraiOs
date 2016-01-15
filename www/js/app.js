(function(){
var app = angular.module('AyngaranFrance', ['ionic', 'AyngaranFrance','ngSanitize','ngCordova','youtube-embed'])

app.run(function($ionicPlatform, $ionicPopup, $cordovaNetwork) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
   if(window.Connection) {
                if(navigator.connection.type == Connection.NONE) {
                    $ionicPopup.confirm({
                        title: "Problème de connexion",
                        content: "Il semblerait que vous ne soyez pas connecté à internet, vous pouvez soit choisir de quitter l'application ou de rester sur l'application pour accéder à la liste des salles (Voir dans le menu).",
                        cancelText    : "Quitter",
                        cancelType    : "button-balanced",
                        okText        : "Rester"
                    })
                    .then(function(result) {
                        if(!result) {
                            ionic.Platform.exitApp();
                        }
                    });
                }
            }
  });
})


app.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
  $ionicConfigProvider.navBar.alignTitle('center');
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    //controller: 'AppCtrl'
  })
  .state('app.salles', {
      url: '/salles',
      views: {
        'menuContent': {
         templateUrl: 'templates/salles.html'
        }
      }
    })
    .state('app.propos', {
      url: '/propos',
      views: {
        'menuContent': {
         templateUrl: 'templates/propos.html'
        }
      }
    })
    .state('app.Epinay', {
      url: '/Epinay',
      views: {
        'menuContent': {
         templateUrl: 'templates/epinay.html'
        }
      }
    })
    .state('app.Evry', {
      url: '/Evry',
      views: {
        'menuContent': {
         templateUrl: 'templates/evry.html'
        }
      }
    })
        .state('app.Torcy', {
      url: '/Torcy',
      views: {
        'menuContent': {
         templateUrl: 'templates/torcy.html'
        }
      }
    })
    .state('app.Publicis', {
      url: '/Publicis',
      views: {
        'menuContent': {
         templateUrl: 'templates/publicis.html'
        }
      }
    })
        .state('app.Chelles', {
      url: '/Chelles',
      views: {
        'menuContent': {
         templateUrl: 'templates/chelles.html'
        }
      }
    })
     .state('app.Fontainebleau', {
      url: '/Fontainebleau',
      views: {
        'menuContent': {
         templateUrl: 'templates/fontainebleau.html'
        }
      }
    })
      .state('app.Mantes', {
      url: '/Mantes',
      views: {
        'menuContent': {
         templateUrl: 'templates/mantes.html'
        }
      }
    })
    .state('app.Europacorp', {
      url: '/Europacorp',
      views: {
        'menuContent': {
         templateUrl: 'templates/europacorp.html'
        }
      }
    })
          .state('app.Courneuve', {
      url: '/Courneuve',
      views: {
        'menuContent': {
         templateUrl: 'templates/courneuve.html'
        }
      }
    })
        .state('app.Garges', {
      url: '/Garges',
      views: {
        'menuContent': {
         templateUrl: 'templates/garges.html'
        }
      }
    })
    .state('app.Savigny', {
      url: '/Savigny',
      views: {
        'menuContent': {
         templateUrl: 'templates/savigny.html'
        }
      }
    })
    .state('app.Trappes', {
      url: '/Trappes',
      views: {
        'menuContent': {
         templateUrl: 'templates/trappes.html'
        }
      }
    })
        .state('app.Blagnac', {
      url: '/Blagnac',
      views: {
        'menuContent': {
         templateUrl: 'templates/blagnac.html'
        }
      }
    })
     .state('app.Brignais', {
      url: '/Brignais',
      views: {
        'menuContent': {
         templateUrl: 'templates/brignais.html'
        }
      }
    })
          .state('app.Bordeaux', {
      url: '/Bordeaux',
      views: {
        'menuContent': {
         templateUrl: 'templates/bordeaux.html'
        }
      }
    })
    .state('app.Meziere', {
      url: '/Meziere',
      views: {
        'menuContent': {
         templateUrl: 'templates/meziere.html'
        }
      }
    })
    .state('app.Pau', {
      url: '/Pau',
      views: {
        'menuContent': {
         templateUrl: 'templates/pau.html'
        }
      }
    })
    .state('app.Tours', {
      url: '/Tours',
      views: {
        'menuContent': {
         templateUrl: 'templates/tours.html'
        }
      }
    })
    .state('app.Colmar', {
      url: '/Colmar',
      views: {
        'menuContent': {
         templateUrl: 'templates/colmar.html'
        }
      }
    })
    .state('app.Clermont', {
      url: '/Clermont',
      views: {
        'menuContent': {
         templateUrl: 'templates/clermont.html'
        }
      }
    })
    .state('app.Vitrolles', {
      url: '/Vitrolles',
      views: {
        'menuContent': {
         templateUrl: 'templates/vitrolles.html'
        }
      }
    })
    .state('app.Nice', {
      url: '/Nice',
      views: {
        'menuContent': {
         templateUrl: 'templates/nice.html'
        }
      }
    })
    .state('app.Poitiers', {
      url: '/Poitiers',
      views: {
        'menuContent': {
         templateUrl: 'templates/poitiers.html'
        }
      }
    })
    .state('app.Mans', {
      url: '/Mans',
      views: {
        'menuContent': {
         templateUrl: 'templates/mans.html'
        }
      }
    })
    .state('app.Tarbes', {
      url: '/Tarbes',
      views: {
        'menuContent': {
         templateUrl: 'templates/tarbes.html'
        }
      }
    })
    .state('app.Bourges', {
      url: '/Bourges',
      views: {
        'menuContent': {
         templateUrl: 'templates/bourges.html'
        }
      }
    })
    .state('app.Niort', {
      url: '/Niort',
      views: {
        'menuContent': {
         templateUrl: 'templates/niort.html'
        }
      }
    })
    .state('app.Lanester', {
      url: '/Lanester',
      views: {
        'menuContent': {
         templateUrl: 'templates/lanester.html'
        }
      }
    })
    .state('app.Brest', {
      url: '/Brest',
      views: {
        'menuContent': {
         templateUrl: 'templates/brest.html'
        }
      }
    })
    .state('app.Mulhouse', {
      url: '/Mulhouse',
      views: {
        'menuContent': {
         templateUrl: 'templates/mulhouse.html'
        }
      }
    })
    .state('app.Lomme', {
      url: '/Lomme',
      views: {
        'menuContent': {
         templateUrl: 'templates/lomme.html'
        }
      }
    })
    .state('app.Metz', {
      url: '/Metz',
      views: {
        'menuContent': {
         templateUrl: 'templates/metz.html'
        }
      }
    })
    .state('app.Nancy', {
      url: '/Nancy',
      views: {
        'menuContent': {
         templateUrl: 'templates/nancy.html'
        }
      }
    })
    .state('app.Nimes', {
      url: '/Nimes',
      views: {
        'menuContent': {
         templateUrl: 'templates/nimes.html'
        }
      }
    })
    .state('app.home', {
      url: '/home',
      views: {
        'menuContent': {
          templateUrl: 'templates/home.html',
          controller: 'mycontroller'
        }
      }
    })
    .state('app.Ris', {
      url: '/Ris',
      views: {
        'menuContent': {
          templateUrl: 'templates/ris.html'
        }
      }
    })
    .state('app.prochainement', {
      url: '/prochainement',
      views: {
        'menuContent': {
          templateUrl: 'templates/prochainement.html',
          controller:'prochainement'
        }
      }
    })
  .state('app.single', {
    url: '/playlists/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html',
       controller: 'PlaylistCtrl'
      }
    }
  });
    // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});


app.controller('mycontroller', function($scope, $http, $state,$ionicLoading,$timeout){
      $scope.posts = [];

      var wordpressUrl = "http://www.ayngaran.fr/wp-json/posts?filter[category_name]=applications";
        $http.get(wordpressUrl)
          .success(function(response){
              $ionicLoading.show({
    content: 'Loading',
    animation: 'fade-in',
    showBackdrop: true,
    maxWidth: 200,
    showDelay: 0
  });
            angular.forEach(response, function(child){
              $scope.posts.push(child);
            });
            $timeout(function () {
                $ionicLoading.hide();
                $scope.stooges = [{name: 'Moe'}, {name: 'Larry'}, {name: 'Curly'}];
            }, 2000);
          })
          .error(function(response, status){
            console.log("Error " + status + response);
          });
          $scope.show = function(id){
            console.log(id);
          }
           $scope.doRefresh = function() {
            $scope.posts = [];
              $http.get(wordpressUrl)
                .success(function(response){
                  angular.forEach(response, function(child){
                    $scope.posts.push(child);
                    console.log("refresh");
                  });
                         $scope.$broadcast('scroll.refreshComplete');
                })
                .error(function(response, status){
                  console.log("Error " + status + response);
              });
              }
  });
  app.controller('PlaylistsCtrl', function($scope, $state) {

});

app.controller('PlaylistCtrl', function($scope, $stateParams, $http, $ionicLoading, $timeout) {
  $scope.article = [];
  $scope.article_id = $stateParams.playlistId;
  $ionicLoading.show({
    content: 'Loading',
    animation: 'fade-in',
    showBackdrop: true,
    maxWidth: 200,
    showDelay: 0
  });
  var wp_url = "http://www.ayngaran.fr/wp-json/posts/" + $scope.article_id;
            $http.get(wp_url)
              .success(function(response){
                console.log(response);
                $scope.article = response;
                console.log($scope.article.content);
                $scope.html = $scope.article.content;
                $scope.theBestVideo = $scope.article.meta.youtube_id;
                $timeout(function () {
                  $ionicLoading.hide();
                }, 2000);
          })
              .error(function(response, status){
            console.log("Error " + status + response);
          });
});


app.controller('prochainement', function($scope, $http, $state,$ionicLoading,$timeout){
      $scope.posts = [];

      var wordpressUrl = "http://www.ayngaran.fr/wp-json/posts?filter[category_name]=prochainement";
        $http.get(wordpressUrl)
          .success(function(response){
              $ionicLoading.show({
    content: 'Loading',
    animation: 'fade-in',
    showBackdrop: true,
    maxWidth: 200,
    showDelay: 0
  });
            angular.forEach(response, function(child){
              $scope.posts.push(child);
            });
            $timeout(function () {
                $ionicLoading.hide();
                $scope.stooges = [{name: 'Moe'}, {name: 'Larry'}, {name: 'Curly'}];
            }, 2000);
          })
          .error(function(response, status){
            console.log("Error " + status + response);
          });
          $scope.show = function(id){
            console.log(id);
          }
           $scope.doRefresh_pro = function() {
            $scope.posts = [];
              $http.get(wordpressUrl)
                .success(function(response){
                  angular.forEach(response, function(child){
                    $scope.posts.push(child);
                    console.log("refresh");
                  });
                         $scope.$broadcast('scroll.refreshComplete');
                })
                .error(function(response, status){
                  console.log("Error " + status + response);
              });
              }
  });


}());
