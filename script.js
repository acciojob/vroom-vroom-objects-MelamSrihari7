// Complete the js code
function Car(make, model) {
	this.make=make
	this.model=model
}
Car.prototype.getMakeModel=function(){
	return `${this.make} ${this.model}`
}

function SportsCar(make, model, topSpeed) {
	this.make=make
	this.model=model
	this.topspeed=topSpeed
}
SportsCar.prototype=Object.create(Car.prototype)
SportsCar.prototype.getTopSpeed=function () {
	return this.topspeed
}
const car = new SportsCar("Ferrari", "Testarossa", 200);
console.log(car.getMakeModel()); // Output: Ferrari Testarossa
console.log(car.getTopSpeed()); // Output: 200


// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
