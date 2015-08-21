angular.module('sounder')
.controller('mainController', function($scope, soundService, $sce){
	//Get user function
	$scope.getUser = function(){
		soundService.getUser($scope.searchText).then(function(data){
			$scope.userData = data.data;
			console.log(data.data);
		});
	}
	//Play song
	$scope.play = function(track_url){
		SC.oEmbed(track_url, { auto_play: true }, function(oEmbed) {
      	$scope.$apply($scope.player_html = $sce.trustAsHtml(oEmbed.html));
    	});
	}
})