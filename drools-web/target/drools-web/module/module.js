var module=angular.module('myapp',['ngRoute']);
		
		module.config(['$routeProvider',function($routeProvider) {
            $routeProvider.
                when('/login', {
                    templateUrl: 'partials/login.html',
                    //controller: someController
					
                }).
				when('/welcome',{
					templateUrl:'partials/welcome.html',
					//controller: someController
				
				}).
				when('/home',{
					templateUrl:'partials/search.html',
					//controller: someController
				
				}).
			
			    when('/search', {
			       
			            templateUrl: 'partials/search.html',
			            controller: 'searchController'
			            
			        
			     
			    }).
                otherwise({
                    redirectTo: '/home'
                });
        }]);