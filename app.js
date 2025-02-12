(function(){
    "use strict"
    var x = "hello";

    angular.module('myFirstApp', []) //the array represents the dependecies of the new app(Model in js)
    .controller('MyFirstController', function($scope){  //Creates a controller that works as a ViewMode, $ <- means its a variable reserved for Angular
        $scope.name = "Luís";
        $scope.sayHello = function(){return "Hello Coursera"};
    })

    //using a $filter (Dempency Injection)
    .controller("DIController", DIController); //["$scope", "$filter", "$injector", DIController] <- That its just for mimifing the code and will act as a the parameters for the controller function

    //DIController.$inject = ['$scope','$filter']; <- This is also for mimifing the code and its a way cleaner aproach
    function DIController($scope, $filter, $injector){
        $scope.name = "Apple";

        $scope.upper = function(){
            var upCase = $filter('uppercase');
            $scope.name = upCase($scope.name);
        }
        
        console.log($injector.annotate(DIController)); //Returns the parameters
    }

    angular.module('myFirstApp') //Gets the existing module
    .controller("MsgController", MsgController);
    
    MsgController.$inject = ['$scope']; 
    function MsgController($scope){
        $scope.name = "Luís"
        $scope.state = "unhappy";
        $scope.sayMessage = function(){
            return "Luís likes to eat food!";
        };

        $scope.changeMood = function(){
            $scope.state === "unhappy" ?  $scope.state = "happy" : $scope.state = "unhappy"; 
        }
    }


})();