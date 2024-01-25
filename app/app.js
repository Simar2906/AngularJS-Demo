var app = angular.module('demoApp', []);

app.controller('MyController', function ($scope) {
    $scope.message = 'Hello from MyController!';
});

app.directive('simarCongratulator', [function(){
    return{
        restrict: 'E',
        scope: {
            handleClick: '&',
            users: '='
        },
        template: '<h1>Hello {{users[0].name}}</h1><button ng-click="handleClick()">Click Me!</button>'
        
    }
}])
//$root
app.controller('MainController', function ($scope, $http) {
    $scope.message = "I will be overwritten";
    $scope.isVisible = true;
    $scope.clickCount = 0;
    $scope.items = ['Item 1', 'Item 2', 'Item 3'];
    $scope.isNameChanged = false;
    $scope.twoWayBinding = 'Initial Value';
    $scope.messageFromScope = 'Hello from $scope!';
    $scope.expression = '0';
    $scope.$evalResult = '';
    $scope.userFromHttp = [];

    $http.get('https://jsonplaceholder.typicode.com/users')
    .then(function (response) {
        // Update $scope.userFromHttp with the fetched data
        $scope.userFromHttp = response.data;
    })
    .catch(function (error) {
        console.error('Error fetching users:', error);
    });
    // Simulating an HTTP request
    $scope.users = [
        { name: 'User 1' },
        { name: 'User 2' },
        { name: 'User 3' }
    ];

    $scope.evaluate = function(){
        $scope.$evalResult = $scope.$eval($scope.expression);
    }

    $scope.handleClick = function () {
        console.log($scope.isChecked);

        $scope.clickCount++;
    };

    $scope.handleChange = function () {
        $scope.isNameChanged = true;
    };


});
