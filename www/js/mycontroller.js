app.controller('mycontroller', function($scope, $http, $state,$ionicLoading,$timeout){
      $scope.posts = [];

     $ionicLoading.show({
    content: 'Loading',
    animation: 'fade-in',
    showBackdrop: true,
    maxWidth: 200,
    showDelay: 0
  });
      var wordpressUrl = "http://www.ayngaran.fr/wp-json/posts?filter[category_name]=applications";
        $http.get(wordpressUrl)
          .success(function(response){
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
            alert("Error " + status + response +wordpressUrl);
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
                  alert("Error " + status + response +wordpressUrl);
              });
              }
  });