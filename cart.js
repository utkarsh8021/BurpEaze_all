$('#Btn').click(function(){
	let products = [];
            console.log("add clicked");
	if(localStorage.getItem('products')){
		products = JSON.parse(localStorage.getItem('products'));
	}
	
	products.push({'productId' : 3, image : '<imageLink>'});

  localStorage.setItem('products', JSON.stringify(products));
});

$('#Remove').click(function(){
	let productId = 3;
	let storageProducts = JSON.parse(localStorage.getItem('products'));
  let products = storageProducts.filter(product => product.productId !== productId );
  localStorage.setItem('products', JSON.stringify(products));
});