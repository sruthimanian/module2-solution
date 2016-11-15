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
			
		}
	};



};
function AlreadyBoughtController(ShoppingListCheckOffService)

{
	var bought = this;
	console.log("Controller");
	
	bought.items = ShoppingListCheckOffService.boughtItems();
	bought.error= "Nothing bought yet";
	
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
	
	
	service.getItems = function () {
	console.log(to_buy);
    return to_buy;
	};
	service.boughtItems=function()
	{
		
		return bought;
	}
	
	
	service.moveTo=function(itemIndex)
	{
	
		if(to_buy.length > 1 )
		{
		console.log("hi2");
		bought.push(to_buy[itemIndex]);
		to_buy.splice(itemIndex,1);
		
		
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