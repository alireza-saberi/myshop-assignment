$('document').ready(function(){
	var $lamp = $('#lamp');
	var $wallet = $('#wallet');
	
	// clear out old data before new request
	$lamp.text("");
	$wallet.text("");
	var assign = "http://shopicruit.myshopify.com/products.json";
	$.getJSON(assign, function(data){
        	var items = data.products;
			var lampCosts = 0;
			var walletCosts = 0;
			var lamps = new Array();
			var wallets = new Array();
			for(var i=0; i < items.length; i++){
				// console.log("Item number "+ i + " is " + items[i].product_type);
				if (items[i].product_type === 'Lamp'){
					console.log('********** Number ' + i + ' is '+ items[i].title +' *************');
					$lamp.append('<li>'+ '********** Number ' + i + ' is '+ items[i].title +' *************' + '</li>');
					var variants = items[i].variants;
					lamps.push(items[i]);
					for(var j = 0; j < variants.length; j++){
						console.log(variants[j].title + " is available: " + variants[j].available + ' with price of : ' + variants[j].price);
						$lamp.append(variants[j].title + " is available: " + variants[j].available + ' with price of : ' + variants[j].price + '<br>');
						if (variants[j].available){
							lampCosts += parseFloat(variants[j].price);
						}	
					}
				}
				if (items[i].product_type === 'Wallet'){
					console.log('********** Number ' + i + ' is '+ items[i].title +' *************');
					$wallet.append('<li>'+ '********** Number ' + i + ' is '+ items[i].title +' *************' + '</li>');
					wallets.push(items[i]);
					var variants = items[i].variants;
					for(var j = 0; j < variants.length; j++){
						console.log(variants[j].title + " is available: " + variants[j].available + ' with price of : ' + variants[j].price);
						$wallet.append(variants[j].title + " is available: " + variants[j].available + ' with price of : ' + variants[j].price + '<br>');
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



	});
});