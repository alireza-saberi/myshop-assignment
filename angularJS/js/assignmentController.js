(function(){
	var assignmentController = function($scope, appSettings, $http){
		$scope.appSettings = appSettings;
		$http.get(appSettings.itemsObjects).success(function(data){
			var items = data.products;
			var lampCosts = 0;
			var walletCosts = 0;
			var lamps = new Array();
			var wallets = new Array();
			for(var i=0; i < items.length; i++){
				// console.log("Item number "+ i + " is " + items[i].product_type);
				if (items[i].product_type === 'Lamp'){
					console.log('********** Number ' + i + ' is '+ items[i].title +' *************');
					var variants = items[i].variants;
					lamps.push(items[i]);
					for(var j = 0; j < variants.length; j++){
						console.log(variants[j].title + " is available: " + variants[j].available + ' with price of : ' + variants[j].price);
						if (variants[j].available){
							lampCosts += parseFloat(variants[j].price);
						}	
					}
				}
				if (items[i].product_type === 'Wallet'){
					console.log('********** Number ' + i + ' is '+ items[i].title +' *************');
					wallets.push(items[i]);
					var variants = items[i].variants;
					for(var j = 0; j < variants.length; j++){
						console.log(variants[j].title + " is available: " + variants[j].available + ' with price of : ' + variants[j].price);
						if (variants[j].available){
							walletCosts += parseFloat(variants[j].price);
						}	
					}
				}			
			}
			$scope.lamps = lamps;
			$scope.wallets = wallets;
			$scope.lampCosts = lampCosts;
			$scope.walletCosts = walletCosts;
			console.log(lamps);
			console.log("Lamp costs is " + lampCosts);
			console.log("Wallet costs is " + walletCost);
			console.log("Total costs is " + (lampCosts+walletCost)) ;
		}).error(function(err){
			console.log("Error in reading data");
		});
	};
	assignmentController.$inject = ['$scope', 'appSettings', '$http'];
	angular.module('assignmentApp').controller('assignmentController', assignmentController);
}());