// Complete the js code
function Car(make, model) {
	if(typeof make!=="string"||typeof model!=="string")
	{return}
	this.make=make
	this.model=model
}
Car.prototype.getMakeModel=function(){
	return `${this.make} ${this.model}`
}

function SportsCar(make, model, topSpeed) {
	this.make=make
	this.model=model
	this.topSpeed=topSpeed
}
SportsCar.prototype=Object.create(Car.prototype)
SportsCar.prototype.getTopSpeed=function () {
	return this.topSpeed
}

const car = new SportsCar("Ferrari", "Testarossa", 200);

// Call getMakeModel() to get the make and model of the car
console.log(car.getMakeModel()); // Output: Ferrari Testarossa

// Call getTopSpeed() to get the top speed of the sports car
console.log(car.getTopSpeed()); // Output: 200

document.body.innerHTML = `${car.getMakeModel()} ${car.getTopSpeed()}`

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
