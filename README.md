ng-appnima
==========

[appnima.js](https://github.com/tapquo/appnima.js) wrapper for [AngularJS](http://angularjs.org)


*WIP*

Install
=======

Include `jimakker.ng-appnima` as a module dependency to your app

Use
===

Works *almost* as appnima.js. ng-appnima provides callbacks to appnima.js methods:

```javascript

// inject appnima factory service in controller
function MyCtrl1(appnima) {
	// pass needed params and a callback function
	appnima.User.login("email@server.com","password",function(error,result){
		if(error) console.log(error);
		$scope.user = result;
	});
}

``` 


