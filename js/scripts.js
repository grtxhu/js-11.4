function Phone(brand, price, color, operatingSystem) {
    this.brand = brand;
    this.price = price;
    this.color = color;
    this.operatingSystem = operatingSystem;
}

Phone.prototype.printInfo = function() {
		console.log("The phone brand is " + this.brand + ", color is " + this.color + " ,price is " + this.price + ", and the operatingSystem is " + this.operatingSystem)
}




var iPhone6S = new Phone("Apple", 2250, "silver", "iOS");

iPhone6S.printInfo();

var SamsungGalaxyS6 = new Phone("Samsung", 899, "rosegold", "Android");

SamsungGalaxyS6.printInfo();

var OnePlusOne = new Phone("OnePlus", 1840, "black", "Android");

OnePlusOne.printInfo();


Phone.prototype.getWarrantyCost = function() {
	console.log(" The warranty cost in case of "  + this.brand + " is " + this.price*0.10)
}


SamsungGalaxyS6.getWarrantyCost();
OnePlusOne.getWarrantyCost();
iPhone6S.getWarrantyCost();


