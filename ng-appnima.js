/*
 * ng-appnima v0.0.2
 * (c) 2013 Jimakker https://twitter.com/jimakker
 * License: MIT
 */

'use strict';

angular.module('jimakker.ng-appnima', []).
  factory('appnima', function ($q,$timeout,appnima_key) {

  	// Import value from appnima_key service.

    Appnima.key = appnima_key;

    // USER API

    	var signup = function(email,password) {
    		var deferred = $q.defer();
    		Appnima.User.signup(email,password).
    			then(function (error,result) {  
		        	resolveDeferred(deferred,error,result);
		    	});
			return deferred.promise;		    	
    	};

    	var login = function(email,password) {
    		var deferred = $q.defer();
    		Appnima.User.login(email,password)
    			.then(function(error,result){
    				resolveDeferred(deferred,error,result);
    			});
    		return deferred.promise;
    	};

    	var logout = function(){
    		var deferred = $q.defer();
    		Appnima.User.logout()
    			.then(function (error,result) {  
    				resolveDeferred(deferred,error,result);
		        }, 0);
			return deferred.promise;		        
    	};

    	var userInfo = function(update) {
    		var deferred = $q.defer();
			Appnima.User.info(update)
				.then(function(error,result){
    				resolveDeferred(deferred,error,result);
				});
    		return deferred.promise;
    	};

    	var password = function(old_pass,new_pass){
    		var deferred = $q.defer();
    		Appnima.User.password(old_pass,new_pass)
    			.then(function(error,result) {
    				resolveDeferred(deferred,error,result);
    			});
    		return deferred.promise;
    	};

    	var avatar = function(b64_avatar) {
    		var deferred = $q.defer();
    		Appnima.User.avatar(b64_avatar)
    			.then(function (error,result) {
    				resolveDeferred(deferred,error,result);
    			});
			return deferred.promise;    			
    	};

    	var terminal = function(os,type,name,version) {
    		var deferred = $q.defer();
    		if(os && type && name && version) {
    			Appnima.User.terminal(os,type,name,version)
    				.then(function (error,result){
    					resolveDeferred(deferred,error,result);
    				});
    		} else {
    			Appnima.User.terminal()
    				.then(function (error,result) {
    					resolveDeferred(deferred,error,result);
    				});
    		}
    		return deferred.promise;
    	};

    	var subscribe = function(email) {
    		var deferred = $q.defer();
    		Appnima.User.subscribe(email)
    			.then(function (error,result) {
    				resolveDeferred(deferred,error,result);
    			});
    		return deferred.promise;
    	};

    	var ticket = function (type,ticket_text) {
    		var deferred = $q.defer();
    		Appnima.User.ticket(type,ticket_text)
    			.then(function (error,result) {
    				resolveDeferred(deferred,error,result);
    			});
    		return deferred.promise;
    	};


    	// MESSENGER API

        var mail = function (user_id,subject,body) {
            var deferred = $q.defer();
            Appnima.Messenger.mail(user_id,subject,body)
                .then(function (error,result) {
                    resolveDeferred(deferred,error,result);
                });
            return deferred.promise;
        };

        var sms = function (user_id,body) {
            var deferred = $q.defer();
            Appnima.Messenger.SMS(user_id,body)
                .then(function (error,result) {
                    resolveDeferred(deferred,error,result);
                });
            return deferred.promise;
        };

        var message = function (user_id,body,subject) {
            var deferred = $q.defer();
            Appnima.Messenger.message(user_id,body,subject)
                .then(function (error,result) {
                    resolveDeferred(deferred,error,result);
                });  
            return deferred.promise;
        };  

        var messageInbox = function(){
            var deferred = $q.defer();
            Appnima.Messenger.messageInbox()
                .then(function (error,result) {
                    resolveDeferred(deferred,error,result);
                });  
            return deferred.promise;
        };

        var messageOutbox = function(){
            var deferred = $q.defer();
            Appnima.Messenger.messageOutbox()
                .then(function (error,result) {
                    resolveDeferred(deferred,error,result);
                });  
            return deferred.promise;
        };        
    	
        var readMessage = function(message_id){
            var deferred = $q.defer();
            Appnima.Messenger.readMessage(message_id)
                .then(function (error,result) {
                    resolveDeferred(deferred,error,result);
                });  
            return deferred.promise;
        };   

        var deleteMessage = function(message_id){
            var deferred = $q.defer();
            Appnima.Messenger.deleteMessage(message_id)
                .then(function (error,result) {
                    resolveDeferred(deferred,error,result);
                });  
            return deferred.promise;
        };         

        // NETWORK API

        var follow = function(user_id){
            var deferred = $q.defer();
            Appnima.Network.follow(user_id)
                .then(function (error,result) {
                    resolveDeferred(deferred,error,result);
                });  
            return deferred.promise;
        };    

        var unfollow = function(user_id){
            var deferred = $q.defer();
            Appnima.Network.unfollow(user_id)
                .then(function (error,result) {
                    resolveDeferred(deferred,error,result);
                });  
            return deferred.promise;
        }; 

        var following = function(user_id){
            var deferred = $q.defer();
            Appnima.Network.following(user_id)
                .then(function (error,result) {
                    resolveDeferred(deferred,error,result);
                });  
            return deferred.promise;
        }; 

        var followers = function(user_id){
            var deferred = $q.defer();
            Appnima.Network.followers(user_id)
                .then(function (error,result) {
                    resolveDeferred(deferred,error,result);
                });  
            return deferred.promise;
        };    

        var networkInfo = function(user_id){
            var deferred = $q.defer();
            Appnima.Network.info(user_id)
                .then(function (error,result) {
                    resolveDeferred(deferred,error,result);
                });  
            return deferred.promise;
        };  

        var check = function(user_id){
            var deferred = $q.defer();
            Appnima.Network.check(user_id)
                .then(function (error,result) {
                    resolveDeferred(deferred,error,result);
                });  
            return deferred.promise;
        };

        var search = function(query){
            var deferred = $q.defer();
            Appnima.Network.search(query)
                .then(function (error,result) {
                    resolveDeferred(deferred,error,result);
                });  
            return deferred.promise;
        };                               

        // LOCATION API

        var places = function(place_id, place_ref){
            var deferred = $q.defer();
            Appnima.Location.places(place_id, place_ref)
                .then(function (error,result) {
                    resolveDeferred(deferred,error,result);
                });  
            return deferred.promise;
        };   

        var place = function(lat,lon,radius){
            var deferred = $q.defer();
            Appnima.Location.place(lat,lon,radius)
                .then(function (error,result) {
                    resolveDeferred(deferred,error,result);
                });  
            return deferred.promise;
        };  

        var add = function(name,address,locality,postal_code,country,lat,lon,email,phone,web){
            var deferred = $q.defer();
            Appnima.Location.add(name,address,locality,postal_code,country,lat,lon,email,phone,web)
                .then(function (error,result) {
                    resolveDeferred(deferred,error,result);
                });  
            return deferred.promise;
        };  

        var checkin = function(place_id, place_ref){
            var deferred = $q.defer();
            Appnima.Location.checkin(place_id, place_ref)
                .then(function (error,result) {
                    resolveDeferred(deferred,error,result);
                });  
            return deferred.promise;
        };          

        var checkins = function(user_id){
            var deferred = $q.defer();
            Appnima.Location.checkins(user_id)
                .then(function (error,result) {
                    resolveDeferred(deferred,error,result);
                });  
            return deferred.promise;
        };          

        var friends = function(lat,lon,radius){
            var deferred = $q.defer();
            Appnima.Location.friends(lat,lon,radius)
                .then(function (error,result) {
                    resolveDeferred(deferred,error,result);
                });  
            return deferred.promise;
        };   

        var people = function(lat,lon,radius){
            var deferred = $q.defer();
            Appnima.Location.people(lat,lon,radius)
                .then(function (error,result) {
                    resolveDeferred(deferred,error,result);
                });  
            return deferred.promise;
        };                 


        // PUSH API

        var send = function(user_id,notification_text,body_object){
            var deferred = $q.defer();
            Appnima.Push.send(user_id,notification_text,body_object)
                .then(function (error,result) {
                    resolveDeferred(deferred,error,result);
                });  
            return deferred.promise;
        };  

        // TODO: SOCKET API

        

    	// SERVICE

    	return {
    		User : {
    			signup : signup,
    			login : login,
    			logout : logout,
    			info : userInfo,
    			password : password,
    			avatar : avatar,
    			terminal : terminal,
    			subscribe : subscribe,
    			ticket : ticket
    		},

    		Messenger : {
                mail : mail,
                sms : sms,
                message : message,
                messageInbox : messageInbox,
                messageOutbox : messageOutbox,
                readMessage : readMessage,
                deleteMessage : deleteMessage
    		},

            Network : {
                follow : follow,
                unfollow : unfollow,
                following : following,
                followers : followers,
                info : networkInfo,
                check : check,
                search : search
            },

            Location : {
                places : places,
                place : place,
                add : add,
                checkin : checkin,
                checkins : checkins,
                friends : friends,
                people : people
            },

            Push : {
                send : send
            }

            // TODO: SOCKET API
    	}



    	// HELPER
    	function resolveDeferred(deferred,error,result) {
    		$timeout(function(){
    			if(!error){
    				deferred.resolve(result);	
    			} else {
    				deferred.reject(error);
    			}
    		},0);
    	};
	});