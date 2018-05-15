function Phone(brand, price, color, operatingSystem) {
    this.brand = brand;
    this.price = price;
    this.color = color;
    this.operatingSystem = operatingSystem;
}


var iPhone6S = new Phone("Apple", 2250, "silver", "iOS");


var SamsungGalaxyS6 = new Phone("Samsung", 899, "rosegold", "Android");


var OnePlusOne = new Phone("OnePlus", 1840, "black", "Android");



Phone.prototype.printInfo = function() {
console.log("The phone brand is " + this.brand + ", color is " + this.color + " ,price is " + this.price + " the operatingSystem is " + this.operatingSystem + " and the warranty cost is " + this.price*0.10)
}


SamsungGalaxyS6.printInfo();
OnePlusOne.printInfo();
iPhone6S.printInfo();


