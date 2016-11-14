(function(){

angular.module('ShoppingListCheckOff',[])
.controller('ToBuyController',ToBuyController)
.controller('AlreadyBoughtController',AlreadyBoughtController)
.service('ShoppingListCheckOffService',ShoppingListCheckOffService);
ToBuyController.$inject = ['ShoppingListCheckOffService'];
AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];


function ToBuyController(ShoppingListCheckOffService)
{
	var toBuy =this;
	 toBuy.items = ShoppingListCheckOffService.getItems();
	console.log('hello controller');
	console.log(toBuy.items);
	toBuy.bought=function(itemIndex)
	{
		try
		{
			ShoppingListCheckOffService.moveTo(itemIndex);
		}
		catch(error)
		{
			toBuy.errorMessage = error.message;
			console.log('hello error');
		}
	};



};
function AlreadyBoughtController(ShoppingListCheckOffService)

{
	var bought = this;
	bought.items = ShoppingListCheckOffService.boughtItems();

};

function ShoppingListCheckOffService()
{
	var service=this;
	var to_buy=[
	
	{
    name: "Milk",
    quantity: "2"
  },
  {
    name: "Donuts",
    quantity: "200"
  },
  {
    name: "Cookies",
    quantity: "300"
  },
  {
    name: "Chocolate",
    quantity: "5"
  }	
	
	];
	console.log('hello service');
	
	var bought=[];
	var zero=0;
	console.log(zero);
	
	service.getItems = function () {
	console.log(to_buy);
    return to_buy;
	};
	service.boughtItems=function()
	{
		return bought;
	
	};
	
	service.moveTo=function(itemIndex)
	{
	
		if(to_buy.length > 1 )
		{
		bought.push(to_buy[itemIndex]);
		to_buy.splice(itemIndex,1);
		console.log(to_buy.length);
		}
		else
		{
		
		bought.push(to_buy[itemIndex]);
		to_buy.splice(itemIndex,1);
			throw new Error("Everything is bought!");
		
		}
	};
	


};

})();