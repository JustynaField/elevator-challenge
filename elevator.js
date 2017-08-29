export default class Elevator {
  constructor() {
    this.startingFloor = 0;
    this.currentFloor = null;
    this.targetFloors = [];
    this.floorRequests = [];
    this.passengerNumber = [];
  }
}

Elevator.prototype.reset = () => {

}


Elevator.prototype.goToFloor = (person) => {
  this.passengetNumber.push(person)
  this.targetFloors.push()
}


//pickUpPerson
//on their current floor
//drop off on reqiested floor


export class Person {
  constructor () {
    this.name = ''
    this.currentFloor = null;
    this.dropOffFloor = null;
  }




}
