/*
 * ng-appnima v0.0.1
 * (c) 2013 Jimakker https://twitter.com/jimakker
 * License: MIT
 */

'use strict';

angular.module('jimakker.ng-appnima', []).
  factory('appnima', function ($timeout) {
    Appnima.key = "YOUR_APP_KEY";
    return {
    	User: {
    		signup: function(email,password,callback){
    			Appnima.User.signup(email,password).then(function (error,result) {  
		          $timeout(function () {
		            callback(error, result);
		          }, 0);
		        });
    		},
    		login: function(email,password,callback){
    			Appnima.User.login(email,password).then(function (error,result) {  
		          $timeout(function () {
		            callback(error, result);
		          }, 0);
		        });
    		},
    		logout: function(callback){
    			Appnima.User.logout().then(function (error,result) {  
		          $timeout(function () {
		            callback(error, result);
		          }, 0);
		        });
    		},
    		info: function(update,callback){
    			if(typeof update=='object'){
	    			Appnima.User.info(update).then(function (error,result) {  
			          $timeout(function () {
			            callback(error, result);
			          }, 0);
			        });
    			} else {
    				Appnima.User.info().then(function (error,result) {  
			          $timeout(function () {
			            update(error, result);
			          }, 0);
			        });
    			}
    		},
    		password: function(old_pass,new_pass,callback){
    			Appnima.User.password(old_pass,new_pass).then(function (error,result) {  
		          $timeout(function () {
		            callback(error, result);
		          }, 0);
		        });
    		},
    		avatar: function(b64_avatar,callback){
    			Appnima.User.avatar(b64_avatar).then(function (error,result) {  
		          $timeout(function () {
		            callback(error, result);
		          }, 0);
		        });
    		},
    		terminal: function(os,type,name,version,callback){
    			if(typeof os=='function'){
    				Appnima.User.terminal().then(function (error,result) {  
			          $timeout(function () {
			            os(error, result);
			          }, 0);
			        });
    			} else {
	    			Appnima.User.terminal(os,type,name,version).then(function (error,result) {  
			          $timeout(function () {
			            callback(error, result);
			          }, 0);
			        });
    			}
    		},
    		subscribe: function(email,callback){
    			Appnima.User.subscribe(email).then(function (error,result) {  
		          $timeout(function () {
		            callback(error, result);
		          }, 0);
		        });
    		},
    		ticket: function(type,ticket_text,callback){
    			Appnima.User.ticket(type,ticket_text).then(function (error,result) {  
		          $timeout(function () {
		            callback(error, result);
		          }, 0);
		        });
    		},

    	},

    	Messenger: {
    		mail: function(user_id,subject,body,callback){
    			Appnima.Messenger.mail(user_id,subject,body).then(function (error,result) {  
		          $timeout(function () {
		            callback(error, result);
		          }, 0);
		        });
    		},
    		sms: function(user_id,body,callback){
    			Appnima.Messenger.SMS(user_id,body).then(function (error,result) {  
		          $timeout(function () {
		            callback(error, result);
		          }, 0);
		        });
    		},
    		message: function(user_id,body,subject,callback){
    			Appnima.Messenger.message(user_id,body,subject).then(function (error,result) {  
		          $timeout(function () {
		            callback(error, result);
		          }, 0);
		        });
    		}, 
    		messageInbox: function(callback){
    			Appnima.Messenger.messageInbox().then(function (error,result) {  
		          $timeout(function () {
		            callback(error, result);
		          }, 0);
		        });
    		},    		   		
    		messageOutbox: function(callback){
    			Appnima.Messenger.messageOutbox().then(function (error,result) {  
		          $timeout(function () {
		            callback(error, result);
		          }, 0);
		        });
    		},
    		readMessage: function(message_id,callback){
    			Appnima.Messenger.readMessage(message_id).then(function (error,result) {  
		          $timeout(function () {
		            callback(error, result);
		          }, 0);
		        });
    		},    		     		
    		deleteMessage: function(message_id,callback){
    			Appnima.Messenger.deleteMessage(message_id).then(function (error,result) {  
		          $timeout(function () {
		            callback(error, result);
		          }, 0);
		        });
    		}    		
    	},

    	Network: {
    		follow: function(user_id,callback){
    			Appnima.Network.follow(user_id).then(function (error,result) {  
		          $timeout(function () {
		            callback(error, result);
		          }, 0);
		        });
    		},
    		unfollow: function(user_id,callback){
    			Appnima.Network.unfollow(user_id).then(function (error,result) {  
		          $timeout(function () {
		            callback(error, result);
		          }, 0);
		        });
    		}, 
    		following: function(user_id,callback){
    			if(user_id){
	    			Appnima.Network.following(user_id).then(function (error,result) {  
			          $timeout(function () {
			            callback(error, result);
			          }, 0);
			        });
    			} else {
	    			Appnima.Network.following().then(function (error,result) {  
			          $timeout(function () {
			            callback(error, result);
			          }, 0);
			        });
    			}
    		},
    		followers: function(user_id,callback){
    			if(user_id){
	    			Appnima.Network.followers(user_id).then(function (error,result) {  
			          $timeout(function () {
			            callback(error, result);
			          }, 0);
			        });
    			} else {
	    			Appnima.Network.followers().then(function (error,result) {  
			          $timeout(function () {
			            callback(error, result);
			          }, 0);
			        });
    			}
    		}, 
    		info: function(user_id,callback){
    			if(user_id){
	    			Appnima.Network.info(user_id).then(function (error,result) {  
			          $timeout(function () {
			            callback(error, result);
			          }, 0);
			        });
    			} else {
	    			Appnima.Network.info().then(function (error,result) {  
			          $timeout(function () {
			            callback(error, result);
			          }, 0);
			        });
    			}
    		},    
    		check: function(user_id,callback){
    			Appnima.Network.check(user_id).then(function (error,result) {  
		          $timeout(function () {
		            callback(error, result);
		          }, 0);
		        });
    		},
    		search: function(query,callback){
    			Appnima.Network.search(query).then(function (error,result) {  
		          $timeout(function () {
		            callback(error, result);
		          }, 0);
		        });
    		}  		    				
    	},

    	Location: {
    		places: function(lat,lon,radius,callback){
    			Appnima.Location.places(lat,lon,radius).then(function (error,result) {  
		          $timeout(function () {
		            callback(error, result);
		          }, 0);
		        });
    		}, 
    		place: function(place_id, place_ref,callback){
    			Appnima.Location.place(place_id,place_ref).then(function (error,result) {  
		          $timeout(function () {
		            callback(error, result);
		          }, 0);
		        });
    		},  
    		add: function(name,address,locality,postal_code,country,lat,lon,email,phone,web,callback){
    			Appnima.Location.add(name,address,locality,postal_code,country,lat,lon,email,phone,web).then(function (error,result) {  
		          $timeout(function () {
		            callback(error, result);
		          }, 0);
		        });
    		},  
    		checkin: function(place_id, place_ref,callback){
    			Appnima.Location.checkin(place_id,place_ref).then(function (error,result) {  
		          $timeout(function () {
		            callback(error, result);
		          }, 0);
		        });
    		},
    		checkins: function(user_id,callback){
    			Appnima.Location.checkins(user_id).then(function (error,result) {  
		          $timeout(function () {
		            callback(error, result);
		          }, 0);
		        });
    		},    	
    		friends: function(lat,lon,radius,callback){
    			Appnima.Location.friends(lat,lon,radius).then(function (error,result) {  
		          $timeout(function () {
		            callback(error, result);
		          }, 0);
		        });
    		}, 
    		people: function(lat,lon,radius,callback){
    			Appnima.Location.people(lat,lon,radius).then(function (error,result) {  
		          $timeout(function () {
		            callback(error, result);
		          }, 0);
		        });
    		}   			
    	},

    	Push: {
    		send: function(user_id,text,body_object,callback){
    			Appnima.Push.send(user_id,text,body_object).then(function (error,result) {  
		          $timeout(function () {
		            callback(error, result);
		          }, 0);
		        });
    		},
    	}
    	// TODO: sockets api, refactor, clean code...
    };
  });
