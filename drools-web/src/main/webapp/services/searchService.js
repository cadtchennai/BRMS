module.service('searchService', function($http,$location) {
	

    this.getBase64authCode = function(userId,password,callbackString){
        {
						var responsePromise = $http.get("http://"+$location.host()+':'+$location.port()+"/drools-web/webresources/base64service/getAuthCode/"+userId+"/"+password);
						//var responsePromise = $http.get("http://localhost:18080/dt-web/webresources/projectservice/getAll");
						responsePromise.success(function(data, status, headers, config) {
						callbackString(data);
				        });
					    responsePromise.error(function(data, status, headers, config) {
				        alert("AJAX failed! because no webservice is attached yet");      					 
					    });
	   };
    }
	 
	this.brms = function(age,authcode, callbackObservation){alert("in serrvice");
        alert("age = "+age);    
        alert("AuthCode = "+authcode); 
    	var age; 
    	
    	/*var name = 'brmsAdmin';
    	alert(name);
		var password = 'password@1';
		alert(password);
		var authString = name + ":" + password;
		alert("auth string: " + authString);*/
		//var basicAuth = 'YnJtc0FkbWluOnBhc3N3b3JkQDE=';
		//var basicAuth = new String(new Base64().encode(authString.getBytes()));
		//alert("Base64 encoded auth string: " + basicAuth);
		/*System.out.println("auth string: " + authString);
		byte[] authEncBytes = Base64.encodeBase64(authString.getBytes());
		String authStringEnc = new String(authEncBytes);
		System.out.println("Base64 encoded auth string: " + authStringEnc);*/
    	var observation ={     
    			"lookup":"RiskStateless",
    			   "commands":[  
    			      {  
    			         "insert":{  
    			            "object":{  
    			               "com.techm.brms.driverriskrules.DriverDO":{    
    			                  "age":age
    			               }
    			            },
    			            "disconnected":false,
    			            "out-identifier":"dr",
    			            "return-object":true,
    			            "entry-point":"DEFAULT"
    			         }
    			      }
    			   ]
    			}

;
    	var obs = observation;
    	alert("observation inside service "+JSON.stringify(observation));
    	alert("observation before Created>>>>"+observation);
    	
    	var responsePromise= $http({url:'http://'+$location.host()+':'+$location.port()+'/kie-server/services/rest/server/containers/instances/AgeRiskContainer',
    		method: "POST",
			data: observation,
			headers: { "content-type" : "application/json",
				"X-KIE-ContentType" : "JSON",
				"Authorization":"Basic " + authcode
				}
    	
		 });
    			responsePromise.success(function(data, status, headers, config) {
    			alert("In data Observaton service" + data);
    			callbackObservation(data);
    			//alert(data.type);
    			//alert(JSON.stringify(data.result));
    			//alert(JSON.stringify(data.result.execution-results));
    			//alert(JSON.stringify(data.result.execution-results.results));
	        });
    		
		    responsePromise.error(function(data, status, headers, config) {
		    	alert(headers);
	        alert("AJAX failed! because no webservice is attached yet");      					 
		    });
	}
});
	

$http({
    method: 'POST',
    url: url,
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    transformRequest: function(obj) {
        var str = [];
        for(var p in obj)
        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
        return str.join("&");
    },
    data: {username: $scope.userName, password: $scope.password}
}).success(function () {});