angular.module('sounder')
.service('soundService', function($http){
	//get user function
	this.getUser = function(username){
		return $http.get('http://api.soundcloud.com/users/' + username + '/tracks.json?client_id=bda4ada8694db06efcac9cf97b872b3e');
	}
})