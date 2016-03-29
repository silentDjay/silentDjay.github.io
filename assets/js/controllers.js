Profijl.controller('homepageController', ['$http', '$scope', function($http, $scope) {

  $scope.message = "we're talking Angular!";
  console.log('control!');

  // below is a sample ajax call - not sure if I'll need it for this project
  // $http.get('http://localhost:3000/db/').success(function(data){
  //   console.log("we are talking to homepage.json!");
  //   $scope.stuff = data;
  // });

  // this page helped me figure out how to pass the json data to giveProdID() on line 25 of home.html
  // http://stackoverflow.com/questions/17039926/adding-parameter-to-ng-click-function-inside-ng-repeat-doesnt-seem-to-work

  // below is a sample of a function that could be called with an ng-click directive, for example!
  // var listingID;
  //
  // $scope.giveProdID = function(listingNUM){
  //   listingID = listingNUM;
  //   console.log("listingID equals " + listingID);
  // };

}]);
