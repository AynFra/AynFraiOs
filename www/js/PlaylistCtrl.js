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