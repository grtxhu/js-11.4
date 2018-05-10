function Phone(brand, price, color, operatingSystem) {
    this.brand = brand;
    this.price = price;
    this.color = color;
    this.operatingSystem = operatingSystem;
}

Phone.prototype.printInfo = function() {
		console.log("The phone brand is " + this.brand + ", color is " + this.color + " ,price is " + this.price + ", and the operatingSystem is " + this.operatingSystem)
}


Phone.prototype.newPrice = function() {
	console.log("New price " + this.brand + "is" + this.price*0.50)
}

var iPhone6S = new Phone("Apple", 2250, "silver", "iOS");

iPhone6S.printInfo();

var SamsungGalaxyS6 = new Phone("Samsung", 899, "rosegold", "Android");

SamsungGalaxyS6.printInfo();

var OnePlusOne = new Phone("OnePlus", 1840, "black", "Android");

OnePlusOne.printInfo();


SamsungGalaxyS6.newPrice();


