var coffeeShop = {
 beans: 40,
 money: 100,
 bean: 1,
 drinkRequirements: {
   latte: {price:5, beanRequirement:10},
   americano: {price:3,beanRequirement:5},
   doubleShot: {price:7,beanRequirement:15},
   frenchPress: {price:8,beanRequirement:12}
 },

 makeDrink: function (drinkType) {
   if (coffeeShop.drinkRequirements.hasOwnProperty(drinkType) && coffeeShop.beans > coffeeShop.drinkRequirements[drinkType].beanRequirement) {
       coffeeShop.beans = this.beans - coffeeShop.drinkRequirements[drinkType].beanRequirement;
     }
  else if(coffeeShop.beans < coffeeShop.drinkRequirements.hasOwnProperty(drinkType) && coffeeShop.drinkRequirements[drinkType]){
alert("Sorry, we're all out of beans!")
     }
  else {
    alert("Sorry, we don't make " + drinkType)
  }
},
buySupplies: function(beans){
  if (this.money>=beans){
    this.money-=beans;
  }
},
buyDrink: function(drinkType){
  if (this.drinkRequirements.hasOwnProperty(drinkType)) {
    this.makeDrink(drinkType);
    this.money+=this.drinkRequirements[drinkType].price;
  }
}

};

coffeeShop.makeDrink("latte");
coffeeShop.makeDrink("americano");
coffeeShop.makeDrink("filtered");
coffeeShop.makeDrink("doubleShot");
coffeeShop.makeDrink("frenchPress");
