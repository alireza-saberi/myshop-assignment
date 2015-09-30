(function(){
	app = angular.module('assignmentApp', []);
	app.constant('appSettings', {
        version:'1.0',
        itemsObjects: 'http://shopicruit.myshopify.com/products.json'
    });
}());