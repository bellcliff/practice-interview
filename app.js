(function(){

    angular.module('main',[]).controller('CardCtrl', function($scope, $http){
        $scope.cards = [];
        $http.get('data.json').success(function(data){
            $scope.cards = data;
        })

    });
})();
