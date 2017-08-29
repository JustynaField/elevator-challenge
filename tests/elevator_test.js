require('babel-core/register')({
  ignore: /node_modules\/(?!ProjectB)/
});
const assert = require('chai').assert;
const { Elevator, Person } = require('../elevator')

describe('Elevator', function() {
  const elevator = new Elevator();

  beforeEach(function() {
    elevator.reset();
  });

  it('should be a function', () => {
    assert.isFunction(Elevator);
  });

  it('should instantiate an elevator', () => {
    assert.isObject(elevator);
  });

  it('should start on floor 0', () => {
    assert.equal(elevator.startingFloor, 0)
  });

  it('should start with no currentFloor selected', () => {
    assert.equal(elevator.currentFloor, 0);
  });

  it('should have an array of floor requests', () => {
    assert.typeOf(elevator.floorRequests, 'array');
  });

  it('should start with no floors requested', () => {
    assert.deepEqual(elevator.floorRequests, []);
  });

  it('should have an array of passengers', () => {
    assert.typeOf(elevator.passengerList, 'array');
  });

  it('should start with no passengers', () => {
    assert.deepEqual(elevator.passengerList, []);
  });

  it('should start with 0 floors traversed', () => {
    assert.equal(elevator.floorsTraversed, 0)
  })

  it('should start with 0 total stops', () => {
    assert.equal(elevator.totalStops, 0)
  })

  it('should reset the values', () => {
    let mockElevator = { currentFloor: 5, dropOffFloor: 3 };
    elevator.reset(mockElevator);

    assert.equal(elevator.currentFloor, 0);
    assert.equal(elevator.dropOffFloor, 0);
  });

  it('should bring a rider to a floor above their current floor', () => {
    let mockUser = { name: "Brittany", currentFloor: 2, dropOffFloor: 5 };
    elevator.goToFloor(mockUser);

    assert.equal(elevator.currentFloor, 5);
    assert.equal(elevator.totalStops, 1);
    assert.equal(elevator.floorsTraversed, 1);
  });

  it('should bring a rider to a floor below their current floor', () => {
    let mockUser = { name: "Brittany", currentFloor: 8, dropOffFloor: 3 };
    elevator.goToFloor(mockUser);

    assert.equal(elevator.currentFloor, 3);
    assert.equal(elevator.totalStops, 1);
    assert.equal(elevator.floorsTraversed, 1);
  });

  it.skip('should be able to pick up a passenger', () => {
    let mockUser = { name: "Brittany", currentFloor: 8, dropOffFloor: 3 };
    elevator.takePassengers(mockUser);

    assert.equal(elevator.passengerList.length, 1)
  })
});

describe('Person', function() {
  const person = new Person();

  it('should be a function', () => {
    assert.isFunction(Person);
  });

  it('should instantiate an person', () => {
    assert.isObject(person);
  });

  it('should start with no current floor selected', () => {
    assert.equal(person.currentFloor, 0);
  });

  it('should start with no dropoff floor selected', () => {
    assert.equal(person.dropOffFloor, 0);
  });

});
