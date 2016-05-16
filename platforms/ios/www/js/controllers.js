angular.module('app.controllers', [])
  
.controller('libraryCtrl', function($scope) {

})
   
.controller('tableOfContentsCtrl', function($scope) {

})
   
.controller('theOdysseyCtrl', function($scope) {

})
   
.controller('category1100Ctrl', function($scope, $stateProvider) { //This part was written in part by the person on Slack
	$scope.questions = [
        {
            'question': 'For how long was Odysseus away from his home, the island of Ithica?',
            'answers': ['One month', 'One year', 'Ten years', 'Twenty years', 'Forty years'],
            'correctAnswer':'3',
            'value': '100'
        },
        {
            'question': 'What is 5 + 3?',
            'answers': ['0', '3', '5', '8', '15'],
            'correctAnswer':'3',
            'value': '100'
        }
    ];
    
    $scope.answerQuestion = function (questionNumber, answer) {
        // Assuming the answer is an int from 0-3 (1-4 or A-D)
        // Also assuming you are providing the question index in relation to array above
        if ($scope.questions[questionNumber].correctAnswer == answer) {
            $state.go('library');
        } else {
            // Display an alert telling them they've failed :-)
        }
    }
})
   
.controller('incorrectCtrl', function($scope) {

})
   
.controller('incorrect2Ctrl', function($scope) {

})
   
.controller('incorrect3Ctrl', function($scope) {

})
   
.controller('correctCtrl', function($scope) {

})
   
.controller('incorrect4Ctrl', function($scope) {

})
 