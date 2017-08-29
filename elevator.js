export class Elevator {
  constructor() {
    this.startingFloor = 0
    this.currentFloor = 0,
    this.targetFloors = [],
    this.floorRequests = [],
    this.passengerList = [],
    this.elevatorStatus = 'idle' || 'moveup' || 'movedown',
    this.floorsTraversed = 0,
    this.totalStops = 0,
    this.dropOffFloor = 0
  }

  reset() {
    this.startingFloor = 0
    this.currentFloor = 0,
    this.targetFloors = [],
    this.floorRequests = [],
    this.passengerList = [],
    this.elevatorStatus = 'idle' || 'moveup' || 'movedown',
    this.floorsTraversed = 0,
    this.totalStops = 0,
    this.dropOffFloor = 0
  }

  takePassengers(person) {
    //request elevator
    if (person.currentFloor !== this.currentFloor) {
      this.currentFloor = person.currentFloor
      this.passengerList.push(person)
    }
      //multiple passengers
      if (passengerList.length > 1) {
        this.targetFloors.push()
      }
  }


  goToFloor(person) {
    //go up
    if(person.currentFloor < person.dropOffFloor) {
      this.elevatorStatus = 'moveup'
      this.currentFloor = person.dropOffFloor
      this.totalStops++,
      this.floorsTraversed++
    }
    //go down
    if (person.currentFloor > person.dropOffFloor) {
      this.elevatorStatus = 'movedown'
      this.currentFloor = person.dropOffFloor
      this.totalStops++
      this.floorsTraversed++
    }
  }
}

export class Person {
  constructor (name) {
    this.name = name,
    this.currentFloor = 0,
    this.dropOffFloor = 0
  }
}
