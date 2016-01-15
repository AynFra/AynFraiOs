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