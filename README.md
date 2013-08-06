ng-appnima
==========

[appnima.js](https://github.com/tapquo/appnima.js) wrapper for [AngularJS](http://angularjs.org)


*WIP*

Install
=======

Load `jimakker.ng-appnima` using html script tags or your prefered way.

Include `jimakker.ng-appnima` as a module dependency to your app:

```javascript

angular.module('myApp', ['myApp.filters', [...] ,'jimakker.ng-appnima']);

``` 

By default ng-appnima gets the `Appnima.key` from an AngularJS service called `appnima_key`, so you have to create one:

 ```javascript

angular.module('myApp.services', []).
  value('appnima_key', 'YOUR_API_KEY').

```


Use
===

Works *almost* as appnima.js. ng-appnima wraps appnima.js promises with AngularJS promises:

```javascript

// inject appnima service in controller
function MyCtrl1(appnima) {
	// pass needed params
	appnima.User.login("email@server.com","password")
		// handle promise
		.then(
			// Success callback
			function(result){
				console.log(result);
				//return a new promise for chaining
				return appnima.User.info();
			},
			// Error callback
			function(error){
				console.error("Login error ",error);
			}
		)
		.then(
			// handle chained promise
			function(result){
				$scope.user = result;
			},
			function(error){
				console.error(error);
			}
		);

	// As AngularJS is awesome you could also use promises like this:
	$scope.user = appnima.User.info();
	// And AngularJS handles all data bindings etc. !
}

``` 

As said, the API is almost the same. [Here is the appnima.js documentation](http://appnima.com/documentation/client).

TODO
====

+ Add socket API