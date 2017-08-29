export class Elevator {
  constructor() {
    this.startingFloor = 0;
    this.currentFloor = 0;
    this.targetFloors = [];
    this.floorRequests = [];
    this.passengerNumber = [];
    this.elevatorStatus = 'idle' || 'moveup' || 'movedown',
    this.floorsTraversed = 0,
    this.totalStops = 0,
    this.dropOffFloor = 0
  }

  // reset() {
  //
  // }

  // goToFloor(person) {
  //   this.passengerNumber.push(person)
  //   this.targetFloors.push()
  // }

  goToFloor(person) {
    //go up
    if(person.currentFloor < person.dropOffFloor) {
      // this.elevatorStatus = 'moveup'
      this.currentFloor = person.dropOffFloor
    }
    //go down
    if (person.currentFloor > this.currentFloor) {
      this.currentFloor = person.dropOffFloor
    //     this.dropOffFloor = this.curentFloor
    //   // this.elevatorStatus = 'movedown'
    //   // this.currentFloor--;
    }
  }

}

//traverse = move back and forth

// Elevator.prototype.goToFloor = (person) => {
//   this.passengetNumber.push(person)
//   this.targetFloors.push()
// }


//pickUpPerson
//on their current floor
//drop off on reqiested floor


export class Person {
  constructor (name, currentFloor, requestedFloor) {
    this.name = name,
    this.currentFloor = 0,
    this.dropOffFloor = 0
  }
}
