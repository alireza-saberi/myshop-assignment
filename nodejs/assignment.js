var request = require("request")

var url = "http://shopicruit.myshopify.com/products.json"

request({
    url: url,
    json: true
}, function (error, response, body) {

    if (!error && response.statusCode === 200) {
        	var items = body.products;
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
			console.log(lamps);
			console.log("Lamp costs is " + lampCosts);
			console.log("Wallet costs is " + walletCosts);
			console.log("Total costs is " + (lampCosts+walletCosts)) ;
    }
})